export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  updated_at: string;
  stargazers_count: number;
  language: string | null;
  default_branch: string;
  fork: boolean;
}

export interface Project {
  title: string;
  image: string;
  link: string;
  preview: string;
  status: string;
  description: string;
}

async function fetchREADME(owner: string, repo: string): Promise<string> {
  const response = await fetch(
    `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
  );
  if (!response.ok) {
    const responseAlt = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`
    );
    if (!responseAlt.ok) return "";
    return responseAlt.text();
  }
  return response.text();
}

function extractFirstImage(markdown: string): string | null {
  const imageRegex = /!\[.*?\]\((https?:\/\/[^\s)]+)\)/g;
  const match = imageRegex.exec(markdown);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

export async function getGitHubProjects(): Promise<Project[]> {
  const username = "rubenpari";
  const token = import.meta.env.GITHUB_TOKEN;
  
  const headers: Record<string, string> = {};
  if (token) {
    headers.Authorization = `token ${token}`;
  }
  
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`,
    { headers }
  );
  
  if (!response.ok) {
    console.error("Failed to fetch GitHub repos:", response.statusText);
    return [];
  }
  
  const repos: GitHubRepo[] = await response.json();
  
  const filteredRepos = repos.filter(
    (repo) => !repo.fork && repo.description && repo.description.length > 0
  );
  
  const projects: Project[] = await Promise.all(
    filteredRepos.map(async (repo) => {
      let imageUrl = "/svgl.png";
      
      try {
        const readme = await fetchREADME(username, repo.name);
        const extractedImage = extractFirstImage(readme);
        if (extractedImage) {
          imageUrl = extractedImage;
        }
      } catch (error) {
        console.warn(`Could not fetch README for ${repo.name}:`, error);
      }
      
      return {
        title: repo.name,
        image: imageUrl,
        link: repo.html_url,
        preview: repo.html_url,
        status: "Deployed",
        description: `${repo.language || "JavaScript"} • ⭐ ${repo.stargazers_count}`,
      };
    })
  );
  
  return projects;
}
