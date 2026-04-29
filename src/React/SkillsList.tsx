import React, { useState } from "react";

const CategoryIcons = {
  "Cloud & DevOps": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M5 20L3 22L5.46944 20.5306C4.41227 19.0739 3.98613 17.3038 4.27121 15.5616C4.5563 13.8193 5.52795 12.2565 6.9497 11.204C8.37145 10.1515 10.1346 9.69491 11.8695 9.92797C13.6044 10.161 15.1733 10.9666 16.2387 12.1809C17.3041 13.3952 17.7773 14.9142 17.5551 16.4105C17.3329 17.9069 16.4328 19.2475 15.0506 20.1365C13.6684 21.0254 11.9169 21.3846 10.201 21.138L5 20ZM9 13V10H11V13H9ZM15 15V8H17V15H15Z"></path>
    </svg>
  ),
  "Programming": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21.5752 18.4698L19.2762 16.1708L13.3232 22.1238C12.9592 22.4878 12.3722 22.4878 12.0082 22.1238L10.6352 20.7508L14.6852 16.7008C14.8662 16.5198 14.9542 16.2658 14.9262 16.0098C14.8982 15.7538 14.7562 15.5228 14.5302 15.3868L9.70418 12.3058C9.35218 12.0708 9.18418 11.6498 9.28118 11.2438C9.37818 10.8378 9.71718 10.5418 10.1332 10.5058L11.1722 10.4108L9.89918 9.13782C9.53518 8.77382 9.53518 8.18682 9.89918 7.82282L13.1002 4.62182C13.4642 4.25782 14.0512 4.25782 14.4152 4.62182L15.7882 5.99482L19.9292 2.42482C20.2932 2.06082 20.8802 2.06082 21.2442 2.42482L23.5762 4.75682C23.9402 5.12082 23.9402 5.70782 23.5762 6.07182L21.5752 18.4698ZM10.0002 19.0008L11.0002 18.0008L6.75718 13.7578C6.39318 13.3938 6.39318 12.8068 6.75718 12.4428L8.24218 10.9578C8.60618 10.5938 9.19318 10.5938 9.55718 10.9578L13.8002 15.2008C14.1642 15.5648 14.1642 16.1518 13.8002 16.5158L10.0002 19.0008Z"></path>
    </svg>
  ),
  "Frontend": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Databases": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 3C7.58172 3 4 4.68629 4 7V17C4 19.3137 7.58172 21 12 21C16.4183 21 20 19.3137 20 17V7C20 4.68629 16.4183 3 12 3ZM12 5C15.866 5 18 6.5 18 7C18 7.5 15.866 9 12 9C8.13401 9 6 7.5 6 7C6 6.5 8.13401 5 12 5ZM18 10.479C17.5 10.855 16.396 11.333 12 11.333C7.60401 11.333 6.5 10.855 6 10.479V12.521C6.5 12.855 7.60401 13.333 12 13.333C16.396 13.333 17.5 12.855 18 12.521V10.479ZM18 14.479C17.5 14.855 16.396 15.333 12 15.333C7.60401 15.333 6.5 14.855 6 14.479V16.521C6.5 16.855 7.60401 17.333 12 17.333C16.396 17.333 17.5 16.855 18 16.521V14.479Z"></path>
    </svg>
  ),
  "Tools & Monitoring": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M22.7072 8.27121L21.293 6.857L16.2426 11.9074C15.8846 11.5494 15.3926 11.4484 14.9266 11.6374C14.4606 11.8264 14.1716 12.2764 14.1716 12.7574V17.0002C14.1716 17.4142 14.4056 17.7934 14.7806 17.9874L8.78063 21.2074C8.28363 21.4714 7.67263 21.3364 7.34163 20.8724L5.12763 17.8844C4.79663 17.4194 4.87763 16.8074 5.34163 16.4774L9.00021 13.5333V9.53325L3.58579 7.32843C3.21779 7.17443 2.79179 7.25643 2.50079 7.53743C2.20979 7.81843 2.11379 8.24043 2.25779 8.61643L4.41421 14.4142L2.41421 15.8284L0.292893 15.1213C0.108893 15.0543 -0.0351072 14.8773 0.00189278 14.6933C0.0388928 14.5093 0.215893 14.3653 0.399893 14.3993L4.58579 15.1716L6.58579 13.7574L3.39989 7.58579C3.25589 7.20979 3.35189 6.78743 3.64289 6.50643C3.93389 6.22543 4.35989 6.14343 4.72789 6.29743L10.1423 8.50225V13.5333L12.1423 12.1191L11.4546 10.6564C11.2836 10.2424 11.3746 9.77143 11.6856 9.46043L14.0002 7.00021H19.0002C19.5523 7.00021 20.0002 7.44821 20.0002 8.00021V11.7574C20.0002 12.2384 19.7112 12.6884 19.2452 12.8774C18.7792 13.0664 18.2872 12.9654 17.9292 12.6074L14.1423 9.00021V9.82843L20.4142 12.8784L19.0002 14.2926L12.7279 11.2426C12.5199 11.1326 12.3639 10.9456 12.2859 10.7196C12.2079 10.4936 12.2139 10.2456 12.3019 10.0206L13.4546 7.17158L17.7786 9.87843C18.1406 10.1104 18.5936 10.1264 18.9706 9.92043C19.3476 9.71443 19.5856 9.31643 19.5976 8.87843L21.7122 8.29243C22.0142 8.22643 22.2732 8.04543 22.4322 7.79143C22.5912 7.53743 22.6352 7.23343 22.5562 6.95043L23.7072 4.05043C23.8442 3.67443 23.7482 3.25243 23.4572 2.97143C23.1662 2.69043 22.7402 2.60843 22.3722 2.76243L22.7072 8.27121ZM9.00021 19.0002V21.0002H11.0002V19.0002H9.00021Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Cloud & DevOps": [
      "Kubernetes & Docker",
      "AWS, GCP & Azure",
      "Jenkins & GitLab CI/CD",
      "Terraform & Ansible",
    ],
    "Programming": [
      "Python",
      "Java",
      "JavaScript & TypeScript",
      "Go & Rust",
    ],
    "Frontend": [
      "React",
      "Angular",
      "Vue.js",
      "Node.js",
    ],
    "Databases": [
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
    "Tools & Monitoring": [
      "Linux & Bash",
      "Git",
      "Prometheus & Grafana",
      "ELK Stack",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
