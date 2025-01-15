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
    projects: [
        {
            id: 1,
            name: "Curriculum Management Dashboard",
            phase: "I",
            summary: "Single-page vanilla Javascript app designed to simplify the management of English study curriculums. Teachers can track assignments and grades, while curating their book lists.",
            languages: ["CSS", "HTML", "JavaScript"],
            collaborators: [
                {
                    id: 1,
                    name: "Elchonon Klafter",
                    link: "https://github.com/klaftech"
                }
            ],
            features: [
                "Access & search database of all published books to add to curriculum.",
                "Allows easy management of active curriculum and assignments.",
                "Create and edit assignments for each book.",
                "Track and analyze student's grades and progress across entire class.",
                "Integrated with OpenLibrary API to load, search and filter published books and retrieve cover images.",
                "Connects to local database to store and retrieve curriculum, assignments, students and grades through a RESTful API hosted on Railway.",
                "Listens for user events and updates the DOM in response.",
                "Allows simple drag and drop adding of books to the curriculum.",
                "Features highly interactive forms for easy data manipulation."
            ],
            technical: [
            ],
            image: "images/projects/curriculum-mgmt.png",
            gif: "images/projects/curriculum-mgmt.gif",
            website_link: "https://jtrapp18.github.io/english-study-curriculum-mgmt/",
            readme: "https://raw.githubusercontent.com/jtrapp18/english-study-curriculum-mgmt/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/english-study-curriculum-mgmt",
            repo_be: "https://github.com/jtrapp18/english-study-curriculum-mgmt-be"
        },
        {
            id: 2,
            name: "Wandr Personal Travel Journal",
            phase: "II",
            summary: "React-based application designed for documenting travels, creating itineraries, leaving reviews, and tracking visited destinations.",
            languages: ["CSS", "React"],
            collaborators: [
                {
                    id: 1,
                    name: "Kelsey Roche",
                    link: "https://github.com/kelseyroche"
                }
            ],
            features: [
                "Login and logout functionality.",
                "Plan trips and save itineraries for destinations.",
                "Add reviews with photos to share your travel experiences.",
                "Locate trips using search and filter functionality.",
                "Utilizes AcuWeather API to view weather forecast for upcoming trips.",
                "Saves data to database stored in back-end API, hosted on Railway."
            ],
            technical: [
            ],
            image: "images/projects/wandr-personal-travel-journal.png",
            gif: "images/projects/wandr-personal-travel-journal.gif",
            website_link: "https://jtrapp18.github.io/wandr-personal-travel-journal/",
            readme: "https://raw.githubusercontent.com/jtrapp18/wandr-personal-travel-journal/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/wandr-personal-travel-journal",
            repo_be: "https://github.com/jtrapp18/wandr-personal-travel-journal-be"
        },
        {
            id: 3,
            name: "Rental Management Tool",
            phase: "III",
            summary: "Python-based command-line app designed to manage data pertaining to a rental property business (e.g. tenants, expenses, payments, and units.)",
            languages: ["Python"],
            collaborators: [
            ],
            features: [
                "Add, view, update, and delete rental units, tenants, expenses, and payment records.",
                "Automatically generates and prints receipts for payments linked to specific tenants.",
                "Provides a monthly rollforward showing amounts due for each tenant, including a full payment history.",
                "Generates and prints a PDF income report summarizing both aggregate results and individual unit performance for a specified year.",
                "Implements a tree structure using Node instances to provide dynamic, multi-level menu navigation with parent-child relationships.",
                "Each Node can trigger user-defined procedures, allowing for dynamic operations like filtering tenants or viewing payment details.",
                "Built with MenuTree and Node classes, enabling an expandable, user-friendly navigation structure.",
                "A command-line interface enhanced with rich text formatting and custom ASCII art for improved user experience.",
                "Easily extend the menu system to support future features and operations like tenant or payment management.",
                "Manages database interactions for creating, reading, updating, and deleting records, with SQL (SQLite or chosen database).",
                "Ensures that only valid data is entered into the system with custom validation functions for key attributes."
            ],
            technical: [
            ],
            image: "images/projects/rental_management_tool.png",
            gif: "images/projects/rental_management_tool.gif",
            website_link: "https://github.com/jtrapp18/rental_management_tool",
            readme: "https://raw.githubusercontent.com/jtrapp18/rental_management_tool/refs/heads/main/README.md",
            repo_fe: "https://github.com/jtrapp18/rental_management_tool",
            repo_be: null
        }
    ],
    relevantWork: [
        {
            id: 1,
            name: "VA Lapse Experience Study for Audit",
            summary: "Led a team to develop a fully automated system for generating and analyzing VA lapse experience studies, aimed at assessing client lapse assumptions for year-end audits. The system streamlines data validation, model selection, and reporting, improving audit efficiency and accuracy.",
            languages: ["Python"],
            features: [
                "Automates the data cleaning and validation process, standardizing client data across multiple audit clients with consistent column names and value ranges.",
                "Uses scikit-learn to fit client data to logistic regression, random forest, and neural network models, selecting the best model based on pre-determined AUC test metrics.",
                "Generates exploratory analysis graphs (e.g., lift charts, ROC charts) to visually assess client data quality and model performance.",
                "Compares client results to PwC benchmarks, generating visualization tools to highlight discrepancies.",
                "Fully automates the experience study process, running multiple models and selecting the optimal one without manual intervention.",
                "Saves exploratory analysis and final report data (including graphs and findings) to AWS S3 and generates standardized PDF reports automatically.",
                "Provides a user interface using Streamlit for audit teams to access results quickly, with the ability to download reports and data stored in AWS S3.",
                "Joblib files are used to store results, allowing for fast retrieval and sharing of graphical data and study results directly from AWS S3."
            ],
            technical: [
                "Led the development of a Python-based system utilizing scikit-learn for model selection and evaluation.",
                "Streamlined data validation and processing pipelines using custom Python scripts to ensure standardized inputs across audit clients.",
                "Implemented AWS S3 integration for secure data storage and retrieval, facilitating seamless access to reports and results.",
                "Utilized joblib to store pre-computed results, allowing for faster access to generated graphs and model results.",
                "Designed and deployed a user interface using Streamlit, enabling users to interact with results and download reports with minimal latency.",
                "Integrated automated PDF generation for reports that include comprehensive visualizations, providing auditors with clear and actionable insights.",
                "Collaborated with audit teams to uncover insights from client data, identifying discrepancies and suggesting modifications based on audit results."
            ],
            year: 2023,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit", "Life Insurance"],
            image: "images/projects/curriculum-mgmt.png"
        },
        {
            id: 2,
            name: "Streamlit App for Quarterly Life Insurance Audit",
            summary: "Built a Streamlit tool to automate the quarterly audit process for FAS 60 and FAS 97 disclosures, improving efficiency and reducing manual data processing.",
            languages: ["Python"],
            features: [
                "Streamlined the audit process by automating data access, calculation, and visualization for FAS 60 and FAS 97 disclosures.",
                "Implemented dynamic filtering in the user interface, allowing users to filter by year, FAS type, cohort group, or individual cohorts.",
                "Utilized Python formulas in Pandas and NumPy to curate and manipulate data for cohort-level analysis.",
                "Created multiple tabs for displaying rollforwards, assumption graphs, and waterfall charts, providing comprehensive insights.",
                "Automatically generates two types of reports: a PDF report with graphical representations of aggregated results, and an Excel report with pre-formatted results for further analysis and observations.",
                "Integrated with AWS S3 to securely store and retrieve reports for audit teams.",
                "Significantly reduced manual data cleaning efforts, allowing the audit team to focus on analysis and insights generation."
            ],
            technical: [
                "Built with Streamlit for the user interface, enabling easy interaction and visualization of data.",
                "Used Pandas and NumPy for data manipulation, curating cohort-level calculations and rollforward analysis.",
                "Generated PDF reports and Excel reports using Python libraries to automate the report creation process.",
                "Stored reports in AWS S3 for secure and scalable data storage, with direct access to audit teams.",
                "Ensured user-friendly navigation with filtering options for year, FAS type, and cohort groups to tailor data presentation."
            ],
            year: 0,
            company: "PriceWaterhouseCoopers, LLC",
            areas: ["Audit", "Life Insurance"],
            image: null
        },
        {
            id: 3,
            name: "Pension Liability Valuation Tool",
            summary: "Developed a VBA-based pension liability valuation tool to automate complex actuarial calculations, enhance data accuracy, and improve user experience. This tool streamlined the generation of year-end financial disclosures and facilitated participant-level liability analysis.",
            languages: ["VBA"],
            features: [
                "Automated the calculation of pension liabilities for multiple plan types, including Unit Accrual, Final Average Salary, and Cash Balance plans.",
                "Integrated user-friendly VBA forms to manage workflows, such as loading prior year data, running calculations, and generating regulatory attachments.",
                "Enabled users to identify and address missing inputs directly through dynamic error-checking forms with dropdown selections.",
                "Streamlined the generation of year-end FASB Disclosures, including customizable options for discount rates, mortality assumptions, and cash flow outputs.",
                "Provided detailed participant-level liability breakdowns with flexible calculation scenarios and override options.",
                "Facilitated regulatory reporting by automating the creation of attachments for 5500 filings and other documentation."
            ],
            technical: [
                "Implemented VBA logic for individual participant-level liability calculations, supporting actuarial assumptions like salary scales, lump-sum election percentages, and generational mortality tables.",
                "Designed an intuitive control panel with options for clearing calculations, toggling worksheet visibility, and running liability projections.",
                "Built robust error-handling and validation mechanisms, ensuring accurate data inputs and providing real-time feedback to users.",
                "Automated the loading of prior year data and calculations, reducing manual data entry and minimizing errors.",
                "Developed a comprehensive 23-page user guide detailing tool functionality, enhancements, and user instructions."
            ],
            year: 2023,
            company: "The Benefit Practice",
            areas: ["Pension", "Consulting"],
            image: null
        },
        {
            id: 4,
            name: "Project Management Tool 'Portal'",
            summary: "Developed a comprehensive project management tool using VBA and MS Access to automate task tracking, manage client and plan data, and improve communication within the organization. The tool significantly streamlined administrative processes and enhanced data management and accessibility.",
            languages: ["SQL", "VBA"],
            features: [
                "Automated client and plan data management, enabling quick access to critical contact and plan details.",
                "Streamlined task tracking by associating user-specific tasks with detailed status updates, which were dynamically updated in the system.",
                "Enabled users to filter and sort tasks based on multiple criteria, allowing for better prioritization and management.",
                "Integrated mass email generation for data requests, automatically drafting emails in Outlook with the correct recipients (client contacts, financial advisors, internal team members).",
                "Facilitated communication across teams by providing a centralized platform for managing and tracking plan details, thus eliminating bottlenecks and increasing task transparency.",
                "Tracked and organized onboarding information for new clients, replacing outdated Excel processes.",
                "Provided a centralized repository for company links and other frequently referenced resources, improving efficiency."
            ],
            technical: [
                "Designed and implemented a robust user interface using MS Access forms for seamless interaction with complex data sets.",
                "Leveraged SQL queries to manage and associate client, plan, and task data, ensuring that all relationships between entities were tracked and easily accessible.",
                "Developed a VBA control panel that allowed users to manage workflows, including running reports, filtering data, and sending mass emails without leaving the application.",
                "Implemented a validation system that prompted users to fill in required information before running key calculations, enhancing data integrity and preventing errors.",
                "Built automation for mass email generation and Outlook integration, simplifying communication and reducing the need for manual data entry."
            ],
            year: 2023,
            company: "The Benefit Practice",
            areas: ["Pension", "Consulting"],
            image: null
        },
        {
            id: 5,
            name: "Assumption Inventory",
            summary: "Developed an MS Access-based database with custom front-end functionality to track and manage metadata related to actuarial assumptions for life insurance models, centralizing key details such as assumption names, locations, and review schedules for improved accessibility and coordination.",
            languages: ["SQL", "VBA"],
            features: [
                "Centralized tracking of metadata related to actuarial assumptions, such as assumption name, ID, summary, last updated date, and file locations.",
                "Created custom MS Access Forms to provide users with an intuitive interface for managing and editing assumption-related information.",
                "Implemented SQL queries and tables to efficiently store and retrieve metadata about assumptions, ensuring consistent and accessible data management.",
                "Enabled users to easily access and update the locations of related documents such as ADDTs and assumption files.",
                "Developed functionality to track the schedule of upcoming ARC (Assumption Review Committee) meetings, improving planning and coordination for assumption reviews.",
                "Streamlined the process of managing assumption-related documentation, ensuring all key details are readily available for internal and regulatory purposes."
            ],
            technical: [
                "Designed and developed an MS Access database with SQL queries and tables to store and manage metadata related to actuarial assumptions.",
                "Built custom MS Access Forms for a user-friendly interface, allowing users to view and edit assumption-related metadata efficiently.",
                "Used VBA to add dynamic and interactive features to the database, including validation and workflows for updating assumption metadata.",
                "Implemented a scheduling feature for ARC meetings to streamline communication and ensure timely reviews of assumptions."
            ],
            year: 2020,
            company: "Knights of Columbus",
            areas: ["Life Insurance"],
            image: "images/projects/curriculum-mgmt.png"
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
    aboutMe: [
        {
            id: 1,
            label: "about",
            images: ["images/me_coding.jpg"],
            tagline: "I'm a life insurance actuary who loves to code.",
            details: `I have worked as an actuary for 10 years, and in every role, I’ve made it my mission to spot inefficiencies and develop automated solutions to streamline processes.
            
            I aim to create tools that eliminate tedious, manual tasks. That way, experts can focus on what really matters—analyzing data, uncovering insights, and making informed decisions.`
        },
        {
            id: 2,
            label: "background",
            images: [],
            tagline: "Actuary, auditor, consultant, coder",
            details: `Over the years, I’ve worked in pension consulting, life insurance, auditing, and consulting. 
            
            During my first job, I worked extensively in Excel and frequently had to tackle repetitive tasks. To streamline my work, I started experimenting with VBA, which quickly sparked my passion for coding. From that point, I sought to incorporate programming into every project where it could be useful.
            
            At work, the majority of my programming experience has involved VBA and Python. However, I've also worked on front-end design in Microsoft Access, as well as projects using Python Streamlit and Power BI.
            
            From there, I decided to enroll in a Software Engineering bootcamp at FlatIron School, where I've learned to build applications using JavaScript, React, and Python.`
        },
        {
            id: 3,
            label: "what else..",
            images: ["images/me_coding.jpg", "images/selfie2.jpg"],
            tagline: "Cat mom, outdoor enthusiast, amatuer artist",
            details: `When I'm not coding, you might find me doing arts and crafts, snowmobiling, camping, or just hanging out with my cats and watching stand-up comedy.`
        }
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