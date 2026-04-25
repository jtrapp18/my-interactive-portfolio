const data = {
    languages: [
        'Python',
        'Flask',
        'React',
        'JavaScript',
        'SQL',
        'CSS',
        'HTML',
        'VBA'
    ],
// PAGE INTRO TEXT (update this in your JSX/component):
// "A mix of personal projects and production work — built across bootcamp, freelance, and professional AI engineering."
    projects: [
        {
            id: 6,
            name: "Film Review Platform",
            phase: "",
            summary: "A live, full-stack content management platform built for a real user. Features TMDB API integration, Word document rendering, user engagement tools, advanced search, and SEO optimization — actively running in production at jamestrappreviews.com.",
            languages: ["TypeScript", "React", "Python", "Flask", "SQL"],
            collaborators: [],
            features: [],
            technical: [],
            image: "images/projects/movie-reviews.png",
            gif: "images/projects/movie-reviews.gif",
            website_link: "https://jamestrappreviews.com",
            readme: "https://raw.githubusercontent.com/jtrapp18/movie-reviews/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/movie-reviews",
            repo_be: null
        },
        {
            id: 5,
            name: "Hive Link",
            phase: "V",
            summary: "Full-stack platform for beekeepers to track hive inspections, predict honey production with ML, and connect with other beekeepers through maps, forums, and events.",
            languages: ["React", "Python", "Flask", "SQL", "CSS"],
            collaborators: [],
            features: [],
            technical: [],
            image: "images/projects/hive-link.png",
            gif: "images/projects/hive-link.gif",
            website_link: "https://hive-link.up.railway.app",
            readme: "https://raw.githubusercontent.com/jtrapp18/hive-link/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/hive-link",
            repo_be: null
        },
        {
            id: 3,
            name: "Rental Management Tool",
            phase: "II",
            summary: "Python CLI app for managing a rental property business. Built a custom node tree data structure from scratch for multi-level menu navigation, with full CRUD, automated financial reporting, and PDF and CSV exports.",
            languages: ["Python"],
            collaborators: [],
            features: [],
            technical: [],
            image: "images/projects/rental_management_tool.png",
            gif: "images/projects/rental_management_tool.gif",
            website_link: "https://github.com/jtrapp18/rental_management_tool",
            readme: "https://raw.githubusercontent.com/jtrapp18/rental_management_tool/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/rental_management_tool",
            repo_be: null
        },
        {
            id: 2,
            name: "Wandr Personal Travel Journal",
            phase: "III",
            summary: "React app for documenting travels, planning trips, and tracking destinations — with AccuWeather API integration for live forecasts and a collaborative group build.",
            languages: ["React", "JavaScript", "SQL", "CSS"],
            collaborators: [
                {
                    id: 1,
                    name: "Kelsey Roche",
                    link: "https://github.com/kelseyroche"
                }
            ],
            features: [],
            technical: [],
            image: "images/projects/wandr-personal-travel-journal.png",
            gif: "images/projects/wandr-personal-travel-journal.gif",
            website_link: "https://jtrapp18.github.io/wandr-personal-travel-journal/",
            readme: "https://raw.githubusercontent.com/jtrapp18/wandr-personal-travel-journal/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/wandr-personal-travel-journal",
            repo_be: "https://github.com/jtrapp18/wandr-personal-travel-journal-be"
        },
        {
            id: 4,
            name: "J&N Cookies",
            phase: "IV",
            summary: "Online cookie store where users can browse, search, and filter products. Registered users can manage accounts, carts, and order history.",
            languages: ["React", "Python", "Flask", "SQL", "CSS"],
            collaborators: [],
            features: [],
            technical: [],
            image: "images/projects/j-n-cookies.png",
            gif: "images/projects/j-n-cookies.gif",
            website_link: "https://j-n-cookies-production.up.railway.app",
            readme: "https://raw.githubusercontent.com/jtrapp18/j-n-cookies/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/j-n-cookies",
            repo_be: null
        },
        {
            id: 1,
            name: "Curriculum Management Dashboard",
            phase: "I",
            summary: "Vanilla JavaScript single-page app for managing English study curriculums. Teachers track assignments and grades while browsing books via OpenLibrary API — built with pure DOM manipulation, no frameworks.",
            languages: ["JavaScript", "HTML", "CSS"],
            collaborators: [
                {
                    id: 1,
                    name: "Elchonon Klafter",
                    link: "https://github.com/klaftech"
                }
            ],
            features: [],
            technical: [],
            image: "images/projects/curriculum-mgmt.png",
            gif: "images/projects/curriculum-mgmt.gif",
            website_link: "https://jtrapp18.github.io/english-study-curriculum-mgmt/",
            readme: "https://raw.githubusercontent.com/jtrapp18/english-study-curriculum-mgmt/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/english-study-curriculum-mgmt",
            repo_be: "https://github.com/jtrapp18/english-study-curriculum-mgmt-be"
        }
    ],
    relevantWork: [
        {
            id: 0,
            name: "Agentic Real Estate Appraisal Review Platform",
            summary: "Co-led engineering of a production multi-agent AI system for document extraction, assumption benchmarking, and automated deliverable generation — built for an internal PwC team reviewing real estate appraisals. Delivered to UAT in 6 months with a 3-person team, reducing case turnaround from ~3 days to same-day processing.",
            languages: ["Python", "TypeScript", "React"],
            features: [
                "Two Human-in-the-Loop (HIL) checkpoints: first for reviewer validation of extracted general property info, second for review of extracted assumption values and benchmark selections — with the ability to add benchmarks and regenerate commentary before finalizing.",
                "Tiered document extraction pipeline: vision LLM extracts and classifies document pages, followed by a custom extraction agent that uses deterministic rules for simple fields and targeted LLM tool calls with audit wrappers for fields requiring calculation.",
                "Assumption benchmarking via a DAG for deterministic filtering (state, property type) with LLM fallback for fuzzier attribute matching — pulling relevant benchmarks from a data source and surfacing all applicable options per property.",
                "LLM-generated commentary for the final client memo, configured via YAML to control tone, structure, and examples — users can review and regenerate commentary after adjusting benchmarks.",
                "Modular LangGraph subgraphs with parallelization for efficient multi-step workflow execution.",
                "Automated Excel deliverable generation via pre-built templates populated directly from pipeline output — client-ready with no manual formatting.",
                "Automated PDF report generation for final memo delivery.",
                "Interactive node-level visualization allowing reviewers to inspect individual LangGraph node outputs for debugging and transparency.",
                "Streamlit monitoring tools for workflow observability and real-time status tracking.",
                "Response caching to reduce LLM API costs and improve performance."
            ],
            technical: [
                "LangGraph with modular subgraphs, parallelization, and Human-in-the-Loop interrupts.",
                "LangChain and LangSmith for orchestration, tracing, and structured metadata across parallel workflows.",
                "Pydantic structured outputs enforced across all LLM calls for consistency and downstream reliability.",
                "Vision LLM for document page extraction feeding into a custom document classifier.",
                "DAG-based deterministic benchmark lookup with LLM fallback for attribute-level filtering.",
                "YAML config + baseline prompt template architecture with dynamic placeholders for maintainable prompt management.",
                "React + TypeScript frontend with interactive node visualization.",
                "PostgreSQL for structured data storage.",
                "Python for pipeline logic, caching, and automated Excel/PDF generation.",
                "AWS for cloud infrastructure and storage."
            ],
            year: 2026,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["AI Engineering", "Agentic AI", "Real Estate"],
            image: null
        },
        {
            id: 1,
            name: "VA Lapse Experience Study for Audit",
            summary: "Led a team to develop an automated system for generating and analyzing VA lapse experience studies across multiple audit clients simultaneously, assessing lapse assumptions for year-end audits. Streamlined data validation, model selection, and reporting — improving audit efficiency and accuracy at scale.",
            languages: ["Python"],
            features: [
                "Automated data validation and standardization across multiple audit clients in parallel.",
                "Automated model selection based on AUC test metrics across logistic regression, random forest, and neural network candidates.",
                "Generates exploratory graphs and benchmark comparisons against PwC standards.",
                "Stores reports and visualizations in AWS S3 for auditor access.",
                "Streamlit interface for auditors to interactively review, filter, and download reports."
            ],
            technical: [
                "Python (pandas, scikit-learn, Streamlit) for modeling and UI.",
                "AWS S3 for report and visualization storage.",
                "Automated model selection pipeline comparing logistic regression, random forest, and neural networks on AUC metrics."
            ],
            year: 2023,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit", "Life Insurance"],
            image: null
        },
        {
            id: 2,
            name: "Quarterly Audit App",
            summary: "Built a Streamlit application to automate the quarterly life insurance audit process for FAS 60 and FAS 97 disclosures, eliminating manual data processing and generating client-ready reports directly from the tool.",
            languages: ["Python"],
            features: [
                "Automates data access, calculations, and visualizations for FAS 60 and FAS 97 disclosures.",
                "Dynamic filtering by year, FAS type, and cohort groups for flexible analysis.",
                "Generates PDF and Excel reports stored in AWS S3, accessible directly through the Streamlit UI.",
                "Reduced manual effort in a recurring quarterly process across multiple audit cycles."
            ],
            technical: [
                "Python (pandas, numpy, Streamlit) for data processing and UI.",
                "AWS S3 for file storage and retrieval.",
                "Automated PDF and Excel report generation."
            ],
            year: 2024,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit", "Life Insurance"],
            image: null
        },
        {
            id: 7,
            name: "RAG Pipeline Evaluation",
            summary: "Contributed to the evaluation of a client RAG pipeline, assessing chunking strategies, embedding quality, and retrieval accuracy. Built a Power BI dashboard to track completeness and accuracy metrics across evaluation dimensions — bridging AI engineering and data visualization.",
            languages: ["Python"],
            features: [
                "Evaluated RAG pipeline performance across chunking strategy, embedding quality, and retrieval accuracy dimensions.",
                "Assessed completeness and faithfulness of retrieved context against ground truth.",
                "Built Power BI dashboard to visualize evaluation metrics and surface areas for improvement.",
                "Contributed to iterative pipeline refinement based on evaluation findings."
            ],
            technical: [
                "Power BI for evaluation metric visualization and reporting.",
                "RAG pipeline assessment covering chunking, embedding models, and retrieval accuracy.",
                "Python for data processing and metric computation."
            ],
            year: 2024,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["AI Engineering", "Consulting"],
            image: null
        },
        {
            id: 8,
            name: "Actuarial Process Automation (2015–2021)",
            summary: "Built a series of internal automation tools across pension consulting and life insurance roles, replacing manual Excel-based workflows with structured database applications, automated reporting pipelines, and custom user interfaces — before modern stacks made this easy.",
            languages: ["VBA", "SQL"],
            features: [
                "Pension liability valuation tool automating complex actuarial calculations and year-end financial disclosures across multiple plan types.",
                "Company-wide project management database with custom UI tracking clients, retirement plans, tasks, and doer/reviewer/sign-off roles — including personal dashboards showing each user's outstanding work.",
                "Mass email automation via Outlook integration, replacing a manual one-by-one communication workflow.",
                "Actuarial assumption inventory database centralizing metadata, review schedules, and model locations across life insurance products.",
                "All tools built with data validation, workflow management, and reporting capabilities."
            ],
            technical: [
                "VBA (Excel macros, forms, and Outlook automation).",
                "SQL via MS Access for structured data storage and querying.",
                "Custom form-based UIs built entirely in VBA without modern frontend frameworks."
            ],
            year: 2021,
            company: "The Benefit Practice & Knights of Columbus",
            areas: ["Pension", "Life Insurance", "Consulting"],
            image: null
        }
    ],
    otherContributions: [
        {
            id: 1,
            name: "Proxy Model Development for Client",
            summary: "Contributed to the development of a scalable proxy model for projecting income statements, combining actuarial model results with a machine learning approach to estimate future liabilities, improving the model's precision.",
            languages: ["Python"],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Consulting", "Actuarial", "Machine Learning"],
            image: null
        },
        {
            id: 2,
            name: "Recalculation of Client Logistic Regression Model",
            summary: "Recreated a client's logistic regression model in Python to validate their assumption development process for audit, identifying potential discrepancies and providing insights into model reliability.",
            languages: ["Python"],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit", "Actuarial", "Consulting"],
            image: null
        },
        {
            id: 3,
            name: "Projected Pension Liabilities",
            summary: "Project seriatim-level projected 401-k expenses for hypothetical client retirement plan",
            languages: ["Python"],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Consulting"],
            image: null
        }
    ],
// Update the socials array too — remove Hashnode
// Update the languages array at the top — add TypeScript
    aboutMe: [
        {
            id: 1,
            label: "about",
            images: ["images/me_coding.jpg"],
            tagline: "actuary turned software engineer",
            details: `I'm an actuary who moved into software engineering and AI application development. I've always been drawn to building the tools than running them manually — so eventually I moved to software engineering.

    I am an FSA and have spent the last few years at PwC building production AI systems in financial services.`
        },
        {
            id: 2,
            label: "background",
            images: [],
            tagline: "always looking to automate",
            details: `I started my career in pension consulting and life insurance. In every role I ended up being the person who automated the repetitive work — first with VBA and Excel, then Python.

    After completing a software engineering bootcamp in 2024–2025, I moved fully into AI application development. I now co-lead development of a production LangGraph platform at PwC.`
        },
        {
            id: 3,
            label: "what else..",
            images: ["images/selfie2.jpg"],
            tagline: "cat mom and outdoor enthusiast",
            details: `When I'm not coding, you'll often find me outdoors — snowmobiling, ice skating, camping, or hiking. I also enjoy painting, arts and crafts, watching stand-up comedy, board games, and spending time with my cats and family.`
        }
    ],

    // SOCIALS — Hashnode removed
    socials: [
        {
            id: 1,
            name: "LinkedIn",
            image: "LI-Black.png",
            link: "https://www.linkedin.com/in/jacqueline-trapp-065a936b"
        },
        {
            id: 2,
            name: "Github",
            image: "github-mark.png",
            link: "https://github.com/jtrapp18"
        }
    ],

    // LANGUAGES — add TypeScript
    languages: [
        'Python',
        'TypeScript',
        'JavaScript',
        'React',
        'Flask',
        'SQL',
        'CSS',
        'HTML',
        'VBA'
    ],
    socials: [
        {
            id: 1,
            name: "LinkedIn",
            image: "LI-Black.png",
            link: "https://www.linkedin.com/in/jacqueline-trapp-065a936b"
        },
        {
            id: 2,
            name: "Github",
            image: "github-mark.png",
            link: "https://github.com/jtrapp18"
        },
        {
            id: 3,
            name: "Hashnode",
            image: "hashnode_black.png",
            link: "https://hashnode.com/672903e59b3903ff579fbdcd/dashboard"
        }
    ]
}
export default data;