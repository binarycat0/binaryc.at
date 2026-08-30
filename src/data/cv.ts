// ─────────────────────────────────────────────────────────────────────────────
// All site content lives here. Editing this file is the only thing you need to
// do to update the CV — the page renders whatever is in this object.
// ─────────────────────────────────────────────────────────────────────────────

export interface Link {
  label: string;
  href: string;
  /** Shown instead of the raw URL, e.g. "github.com/binarycat0" */
  display?: string;
}

/** A bullet that may carry its own sub-bullets. */
export interface Highlight {
  text: string;
  children?: string[];
}

export interface Role {
  company: string;
  /** Optional company website; omit and the name renders as plain text. */
  companyHref?: string;
  title: string;
  /** Free text, rendered as given */
  start: string;
  /** Omit for a current role; renders as "present" */
  end?: string;
  location?: string;
  highlights: Highlight[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Education {
  institution: string;
  credential: string;
  start?: string;
  end?: string;
}

export interface Resource {
  name: string;
  href: string;
  display: string;
  /** Optional one-liner; rendered between the name and the link. */
  description?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface CV {
  name: string;
  title: string;
  location: string;
  summary: string[];
  email: string;
  /** Omit to keep it off a public page. */
  phone?: string;
  links: Link[];
  skills: SkillGroup[];
  experience: Role[];
  projects: Resource[];
  openSource: Resource[];
  publications: Resource[];
  education: Education[];
  languages: Language[];
}

export const cv: CV = {
  name: 'Artur Rakhmatulin',
  title: 'Software Engineer',
  location: 'Portugal',

  summary: [
    'Software engineer with over 10 years of experience in backend development ' +
      'for web applications, microservices, and Python-based frameworks, ' +
      'focusing on building scalable solutions, optimizing workflows, and ' +
      'integrating modern technologies to improve business efficiency.',
    'Ex-ERP developer, with experience in customizing and designing new ' +
      'functionality to enhance process automation for manufacturing ' +
      'enterprises, optimizing workflows, and improving operational efficiency.',
  ],

  email: 'info.binaryc.at@gmail.com',

  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/binarycat0',
      display: 'github.com/binarycat0',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/binarycat',
      display: 'linkedin.com/in/binarycat',
    },
    {
      label: 'Medium',
      href: 'https://medium.com/@artur.rakhmatulin',
      display: 'medium.com/@artur.rakhmatulin',
    },
  ],

  // Derived from the technologies named in the experience below.
  skills: [
    {
      label: 'Languages',
      items: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Java'],
    },
    {
      label: 'Frameworks',
      items: [
        'Django',
        'Django REST Framework',
        'FastAPI',
        'Flask',
        'asyncio',
        'Next.js',
        'React',
        'Redux',
        'Nirvana',
      ],
    },
    {
      label: 'Technologies',
      items: [
        'AWS',
        'Docker',
        'Kubernetes',
        'PostgreSQL',
        'MySQL',
        'Redis',
        'RabbitMQ',
        'Apache Kafka',
        'Apache Polaris',
        'OpenSearch',
        'Apache Airflow',
        'ETL/ELT pipelines',
      ],
    },
    {
      label: 'Focus areas',
      items: [
        'Backend',
        'Microservices',
        'Fullstack',
        'Integrations',
      ],
    },
  ],

  experience: [
    {
      company: 'Dremio',
      companyHref: 'https://www.dremio.com/',
      title: 'Software Engineer II',
      location: 'Lisboa, Portugal',
      start: 'Jun 2025',
      highlights: [
        {
          text: 'Contributed to Apache Polaris:',
          children: [
            'Performed testing, code review, and improvements of documentation and developer guides',
            'Initiated Python SDK and CLI distribution initiative',
            'Coordinated UI development initiative',
            'Drove testing and adoption of apache/polaris-tools/polaris-console',
            'Added OIDC support for Polaris Console',
          ],
        },
        {
          text: 'Contributed to migration of semantic search engine from Vertex AI Search to OpenSearch:',
          children: [
            'Conducted load testing and capacity planning based on current data volumes and projected user growth',
            'Introduced observability for the new microservice: metrics, dashboards, and alerts',
            'Designed separation of semantic search functionality from monolith into microservice',
          ],
        },
      ],
    },
    {
      company: 'PandaDoc Inc',
      companyHref: 'https://www.pandadoc.com/',
      title: 'Software Engineer',
      location: 'Lisboa, Portugal',
      start: 'Oct 2021',
      end: 'Dec 2024',
      highlights: [
        {
          text:
            'Enhanced the public_api and integrations services (Django, Django REST Framework), ' +
            'directly addressing two highly requested features on UserVoice: enabling copy & paste ' +
            'functionality in the editor and facilitating currency formatting with HubSpot, ' +
            'Pipedrive, and Salesforce.',
        },
        {
          text:
            'Conducted a detailed root cause analysis of a high-severity system failure, proposed ' +
            'and deployed a fault-tolerant architecture (detailed approach published on Medium), ' +
            'eliminating similar incidents entirely and raising SLA from 99.5% to 99.9%.',
        },
        {
          text:
            'Detected and addressed critical performance issues of the document list rendering ' +
            'feature on the main page, isolating full table scans as the root cause. Engineered and ' +
            'deployed SQL query optimizations and additional indexing, reducing the 95th and 99th ' +
            'percentile response times from 15s and 60s to 2s and 5s accordingly, decreasing ' +
            'statement timeout errors by 99%, and reducing SQL server load by 5%.',
        },
        {
          text:
            'Designed and implemented 3 new integrations (BambooHR, Greenhouse, and HubSpot) using ' +
            'the iPaaS Workato platform, which helped attract 10+ new clients.',
        },
        {
          text:
            'Introduced and built the RuleEngine microservice for the PandaDoc CPQ for HubSpot ' +
            'project, providing dynamic pricing and quoting capabilities that secured 10+ new ' +
            'clients and added $200,000+ in MRR.',
        },
      ],
    },
    {
      company: 'Yandex',
      companyHref: 'https://market.yandex.ru/',
      title: 'Software Engineer',
      location: 'Moscow, Russia',
      start: 'Sep 2020',
      end: 'Oct 2021',
      highlights: [
        {
          text:
            'Developed a framework (Python, Nirvana, YT) for ETL/ELT pipelines that reduced ' +
            'technical debt, accelerated feature delivery by 7x through the adoption of daily ' +
            'on-demand releases, improved system stability, and enabled CI/CD and monitoring ' +
            'implementation.',
        },
        {
          text: 'Adopted testing practices and CI/CD, reducing the number of bugs and incidents by 10x.',
        },
        {
          text:
            'Enforced logging, monitoring, and on-call practices, enabling faster identification of ' +
            'root causes and resolution of incidents before they impacted users, which improved the ' +
            'quality and reliability of the project and increased SLA to 99%.',
        },
        {
          text:
            'The implemented framework enabled an audit of resource consumption and optimized the ' +
            'usage of RAM, CPU, and data volume by 30%.',
        },
        {
          text:
            'Led a course and conducted training sessions for the Data Engineering team, which ' +
            'accelerated adoption of the new framework and enabled the team to meet the project ' +
            'goals within the stated deadlines.',
        },
      ],
    },
    {
      company: 'B2Broker',
      companyHref: 'https://b2broker.com',
      title: 'Senior Software Engineer',
      location: 'Moscow, Russia',
      start: 'Apr 2019',
      end: 'Aug 2020',
      highlights: [
        {
          text:
            'Engineered a microservice leveraging asyncio-python (part of B2BinPay service), which ' +
            'enhanced the creation and processing efficiency of transactions across Bitcoin-like ' +
            'blockchains and Ethereum networks by reducing transaction weight and implementing ' +
            'modern protocols.',
          children: [
            'Reduced infrastructure costs by 5x through homogeneous architecture and enabled compatibility with various blockchains through configuration, simplified scaling, and streamlined the integration of new blockchains.',
          ],
        },
        {
          text:
            'Drafted support for Ethereum ERC20 tokens, enabling seamless integration with ' +
            "token-based ecosystems and expanding the system's capabilities.",
        },
        {
          text:
            'Optimized transaction workflows, improving the performance and reliability of ' +
            'blockchain-based payment processing.',
        },
      ],
    },
    {
      company: 'LLC Growth Platform',
      companyHref: 'https://cloveri.com/',
      title: 'Lead Software Engineer',
      location: 'Moscow, Russia',
      start: 'Apr 2018',
      end: 'Apr 2019',
      highlights: [
        {
          text:
            'Developed a service for conducting tests and surveys, offering personalized development ' +
            'recommendations for participants and enabling progress tracking through a personal account.',
        },
        {
          text:
            'Designed and implemented the backend using Django and Django REST Framework, ensuring ' +
            'efficient data processing and secure API endpoints.',
        },
        {
          text:
            'Built a responsive and user-friendly frontend with React and Redux, facilitating ' +
            'seamless interaction and real-time updates for users.',
        },
        {
          text:
            'Integrated backend and frontend components, ensuring smooth communication and ' +
            'delivering a cohesive user experience.',
        },
      ],
    },
    {
      company: 'Ru-Center',
      companyHref: 'https://www.nic.ru/',
      title: 'Software Engineer',
      location: 'Moscow, Russia',
      start: 'Jun 2016',
      end: 'Apr 2018',
      highlights: [
        {
          text:
            'Innovated and built a user-friendly admin portal using Python and Django, streamlining ' +
            'the billing system to reduce ticket resolution time from 2 weeks to 1 minute.',
          children: [
            'Facilitated consistent collaboration across departments during every phase of new software rollout while addressing stakeholder input; ensured real-time updates became part of daily operations within one week.',
          ],
        },
        {
          text:
            'Delivered real-time reporting capabilities for accounting teams, resolved root causes ' +
            'of data inconsistencies, and minimized administrative workloads for support teams to ' +
            'just 1 hour daily.',
        },
        {
          text:
            'Collaborated as a Data Engineer on the development of a recommendation system, focusing ' +
            'on data pipelines and efficient data processing (Apache Airflow).',
        },
      ],
    },
  ],

  projects: [
    {
      name: 'ymove',
      href: 'https://ymove.org/',
      display: 'ymove.org',
      description:
        'Community-driven platform that collects real relocation data — filing ' +
        'dates and waiting times — to give people honest statistics on how long ' +
        'visa and residence permit processing actually takes.',
    },
  ],

  openSource: [
    {
      name: 'Apache Polaris',
      href: 'https://github.com/apache/polaris/pulls?q=is%3Apr+is%3Aclosed+author%3Abinarycat0',
      display: 'Merged pull requests',
    },
    {
      name: 'Apache Polaris Tools',
      href: 'https://github.com/apache/polaris-tools/pulls?q=is%3Apr+is%3Aclosed+author%3Abinarycat0',
      display: 'Merged pull requests',
    },
  ],

  publications: [
    {
      name: 'Medium',
      href: 'https://medium.com/@artur.rakhmatulin',
      display: 'medium.com/@artur.rakhmatulin',
    },
    {
      name: 'Habr',
      href: 'https://habr.com/ru/users/binarycat/articles/',
      display: 'habr.com/ru/users/binarycat',
    },
  ],

  education: [
    {
      institution: 'Omsk State University (OmSU)',
      credential: "Bachelor's degree, Solid State Physics",
    },
  ],

  languages: [
    { name: 'English', level: 'Professional working' },
    { name: 'Russian', level: 'Native' },
  ],
};
