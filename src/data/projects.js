import sarcasmImg from '../assets/caae7ce2-2b40-4fa5-864d-ee7a265786b5.png';

export const projects = [
  {
    id: 1,
    title: "Predictive Supply Chain Risk Management System",
    description: "Improved disruption detection by 28%. Built Star Schema with 18+ datasets and 1000+ route simulations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gNlYMwgOKA7dB9L3ZBA60Li4IFySF7XRkA&s",
    techTags: ["Python", "ML Models", "Pandas", "DL Models", "GNN", "NetworkX", "Power BI"],
    status: "Completed",
    features: [
      "Engineered a predictive risk analytics pipeline using supply chain, logistics, and trade data, improving disruption detection by ~28%.",
      "Designed and implemented a Star Schema data warehouse integrating 18+ datasets, enabling scalable feature engineering and efficient ML experimentation.",
      "Developed and deployed ML and LSTM models, executed 1,000+ graph-based route simulations, and built interactive Streamlit dashboards."
    ],
    githubLink: "https://github.com/Chetanareddy18/Predictive-Risk-Supply-Chain-Management-System"
  },
  {
    id: 2,
    title: "Next-Gen Cloud Backup System",
    description: "Multi-cloud disaster recovery system (Azure + AWS) with robust failure simulations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRfIaEjU74MiMg5TAkAKyOjAs9H5zZMwZzoA&s",
    techTags: ["Python", "Flask", "Azure Blob Storage", "AWS S3", "Cloud Security"],
    status: "Completed",
    features: [
      "Architected a multi-cloud backup solution with Azure (primary) and AWS (failover), ensuring high availability and disaster recovery.",
      "Implemented file integrity verification and ransomware detection logic to identify unauthorized file changes in near real time.",
      "Automated backup validation by simulating 10+ data corruption scenarios.",
      "Configured real-time alerts via Email and Microsoft Teams to notify on backup failures and recovery events."
    ],
    githubLink: "https://github.com/Chetanareddy18/NextGen-Cloud-Backup"
  },
  {
    id: 3,
    title: "ChexBot AI Chatbot",
    description: "High-accuracy conversational AI powered by offline LLM with NLP capabilities.",
    image: "https://www.shutterstock.com/image-vector/happy-robot-3d-ai-character-600nw-2464455965.jpg",
    techTags: ["Python", "LangGraph", "LangChain", "Ollama (Phi-3)", "NLP", "Prompt Engineering"],
    status: "Completed",
    features: [
      "Handled conversational flows across 10+ intent types with 95% response accuracy.",
      "Maintained conversation state using agent workflows, reducing user clarification queries by 30%.",
      "Deployed a fully offline LLM system, lowering inference cost by 100% (no API usage).",
      "Context-aware memory management across multi-turn dialogues."
    ],
    githubLink: "https://github.com/Chetanareddy18/ChexBot"
  },
  {
    id: 4,
    title: "AI Legal Document Assistant",
    description: "Vector search assistant reducing hallucination by 45% for legal text analysis.",
    image: "https://static.wixstatic.com/media/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1cd646_ae7f0376474742e4ac9a0dee2f3f5a5d~mv2_d_2508_1672_s_2.jpg",
    techTags: ["Python", "FastAPI", "LangChain", "Pinecone", "IBM WatsonX.ai", "Sentence Transformers", "Streamlit"],
    status: "Completed",
    features: [
      "Built a retrieval-augmented generation system to enable IPC-based legal query resolution using vector retrieval.",
      "Reduced hallucinations by 45% through vector-based retrieval and grounded prompting.",
      "Deployed a FastAPI backend and Streamlit interface to enable real-time, source-aware legal querying."
    ],
    githubLink: "https://github.com/Chetanareddy18/AI_Legal_Assistant-"
  },
  {
    id: 5,
    title: "Explainable Chest Disease Detection System",
    description: "Explainable AI model analyzing X-ray images for chest diseases using CNNs and Swin Transformers.",
    image: "https://www.shutterstock.com/image-vector/3d-blue-lungs-bronchial-tree-600nw-2670815247.jpg",
    techTags: ["PyTorch", "CNNs", "Swin Transformer", "Grad-CAM", "Computer Vision"],
    status: "Completed",
    features: [
      "Built an explainable deep learning diagnostic system using CNNs and Swin Transformers on 5,000+ medical images.",
      "Optimized model performance through tuning and human-in-the-loop validation on 1000+ medical images, reducing false positives and negatives.",
      "Applied Grad-CAM–based explainability to highlight critical regions influencing model predictions, improving clinical interpretability."
    ],
    githubLink: "https://github.com/Chetanareddy18/Explainable-Chest-Disease-Detection"
  },
  {
    id: 6,
    title: "Shadow AI Security Gateway",
    description: "Security gateway for detecting prompt injections and scanning sensitive data in LLM interactions.",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQE2-u6A7CDHCQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709819287970?e=2147483647&v=beta&t=cI_SkL9F_XqSc9iW1sQjqy2wad3-bSQN60lYCg1Dgtc",
    techTags: ["FastAPI", "Streamlit", "Python", "LLM Security"],
    status: "Active",
    features: [
      "Real-time prompt injection detection and classification across LLM interaction layers.",
      "Sensitive data scanner identifying PII, credentials, and confidential content before transmission.",
      "SOC dashboard integration with real-time alerting for flagged interactions.",
      "Modular middleware architecture compatible with multiple LLM providers."
    ],
    githubLink: "https://github.com/Chetanareddy18/ShadowAI"
  },
  {
    id: 7,
    title: "Drone Swarm Network Formation & Self-Healing",
    description: "Software-based drone swarm simulator with generative graph models and multi-agent reinforcement learning for adaptive, self-healing communication networks.",
    image: "https://thediplomat.com/wp-content/uploads/2025/05/sizes/td-story-s-2/thediplomat_2025-04-30-164826.jpg",
    techTags: ["Python", "Graph Neural Networks", "GAE", "VGAE", "Graph GAN", "Multi-Agent RL", "Streamlit"],
    status: "Completed",
    features: [
      "Developed a fully software-based drone swarm simulator modeling movement, battery depletion, communication constraints, and stochastic failure conditions.",
      "Implemented Graph Autoencoder (GAE) and Variational Graph Autoencoder (VGAE) for deterministic and probabilistic communication topology reconstruction.",
      "Integrated Graph GAN for topology refinement and Graph Diffusion Models for temporal evolution and smooth topology transitions.",
      "Achieved 96.8% network stability with an average recovery time of 4 steps using Multi-Agent Reinforcement Learning (MARL) for decentralized adaptive control.",
      "Built a real-time interactive dashboard visualizing drone positions, communication links, failures, and self-healing events."
    ],
    githubLink: "https://github.com/Chetanareddy18/Drone-Swarm"
  },
  {
    id: 8,
    title: "Multi-Horizon Stock Forecasting System",
    description: "Multi-horizon prediction system utilizing advanced machine learning and time series analysis.",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/03/full/1614714835-5733.jpg",
    techTags: ["ML", "Time Series", "Pandas", "Scikit-Learn"],
    status: "Completed",
    features: [
      "Multi-horizon prediction capability for short, medium, and long-term stock forecasting.",
      "Engineered 20+ predictive features including technical indicators and market sentiment.",
      "Historical backtesting framework with performance benchmarking against baseline models.",
      "Automated daily report generation with visual analytics."
    ],
    githubLink: "https://github.com/Chetanareddy18/MultiHorizonStockForecasting"
  },
  {
    id: 9,
    title: "Handwritten OCR System",
    description: "Deep learning OCR system recognizing handwritten characters using CNN+LSTM and TrOCR transformer architectures trained on 814K EMNIST images.",
    image: "https://miro.medium.com/1*t5MYFDI6fx7Toq4foR1Jgw.png",
    techTags: ["Python", "CNN", "LSTM", "TrOCR", "PyTorch", "EMNIST", "Transformers"],
    status: "Completed",
    features: [
      "Developed two OCR architectures: CNN+LSTM for spatial and sequential feature extraction, and TrOCR (transformer-based) for end-to-end text recognition.",
      "Trained on the EMNIST dataset (814K+ images, 47 character classes) with stratified splits to handle class imbalance.",
      "Applied brightness augmentation and normalization to improve robustness across diverse handwriting styles.",
      "Analyzed misclassification patterns for visually similar characters (O/0, I/l) and proposed targeted improvements.",
      "Demonstrated the trade-off between CNN efficiency and transformer-based generalization for real-world OCR deployment."
    ],
    githubLink: "https://github.com/Chetanareddy18/Handwritten-OCR"
  },
  {
    id: 10,
    title: "AI for Tele-Dermatology",
    description: "Deep learning system for skin disease classification and lesion segmentation under real-world illumination and skin-tone diversity using HAM10000 and ISIC datasets.",
    image: "https://www.dermengine.com/hubfs/Doctors%20use%20DermEngine%20for%20its%20teledermoscopy%20capabilities.jpg",
    techTags: ["Python", "PyTorch", "ResNet18", "MobileNetV2", "EfficientNetB0", "U-Net", "Computer Vision"],
    status: "Completed",
    features: [
      "Trained and compared ResNet18, MobileNetV2, and EfficientNetB0 on the HAM10000 dataset for multi-class skin disease classification across 7 diagnostic categories.",
      "Implemented U-Net for pixel-level lesion segmentation on ISIC dataset, evaluated with Dice, IoU, Precision, and Recall metrics.",
      "Conducted robustness analysis under brightness variation and skin-tone diversity — found classification more sensitive to illumination than segmentation.",
      "Performed fairness analysis across skin-tone groups, identifying performance gaps and recommending balanced dataset strategies.",
      "EfficientNetB0 achieved highest classification performance; segmentation maintained stable boundary detection even under challenging lighting conditions."
    ],
    githubLink: "https://github.com/Chetanareddy18/TeleDermatology"
  },
  {
    id: 11,
    title: "Sarcasm Detection System",
    description: "Deep learning NLP system classifying sarcastic vs non-sarcastic text using LSTM networks with LIME & SHAP explainability, deployed via Flask.",
    image: sarcasmImg,
    techTags: ["Python", "NLP", "TensorFlow", "Keras", "LSTM", "LIME", "SHAP", "Flask"],
    status: "Completed",
    features: [
      "Built an LSTM-based deep learning model capturing contextual and sequential language patterns for sarcasm classification.",
      "Preprocessed raw text data through cleaning, tokenization, padding, and stopword removal; built baseline ML models for benchmark comparison.",
      "Integrated LIME and SHAP for explainable AI — visualizing feature importance and prediction reasoning for each classified text.",
      "Deployed a lightweight Flask web application for real-time sarcasm detection with an interactive input interface.",
      "Applicable to social media sentiment analysis, customer feedback systems, and conversational AI agents."
    ],
    githubLink: "https://github.com/Chetanareddy18/SarcasmDetection-"
  },
  {
    id: 12,
    title: "SparkShield: AI-Powered Fraud Detection",
    description: "Scalable fraud detection pipeline for digital payments using PySpark distributed processing, Gradient Boosted Trees, and an interactive Streamlit analytics dashboard.",
    image: "https://pixelplex.io/wp-content/uploads/2022/11/machine-learning-for-fraud-detection-main-1600.jpg",
    techTags: ["Python", "PySpark", "Apache Spark", "Hadoop", "Gradient Boosting", "Scikit-learn", "Streamlit"],
    status: "Completed",
    features: [
      "Designed a scalable fraud detection pipeline processing large-scale financial transaction datasets using Apache Spark distributed computing.",
      "Engineered behavioral features including balance discrepancies and high-value transfer indicators to improve fraud signal extraction.",
      "Trained Gradient Boosted Tree models to classify fraudulent transactions and generate probabilistic fraud risk scores.",
      "Built an interactive Streamlit dashboard for real-time fraud analytics, transaction risk evaluation, and visualization.",
      "Evaluated model performance using AUC-ROC; demonstrated superior detection accuracy over traditional rule-based approaches."
    ],
    githubLink: "https://github.com/Chetanareddy18/sparkshield-fraud-detection"
  },
  {
    id: 13,
    title: "Procurement Intelligence & Vendor Optimization",
    description: "End-to-end Power BI dashboards monitoring 15+ procurement KPIs across vendors, inventory, and payment cycles — reducing procurement cycle time by 25%.",
    image: "https://storage.googleapis.com/developersforhire-staging/production/procurement-analysis-hero.png",
    techTags: ["Power BI", "DAX", "SQL", "Data Modeling", "Excel"],
    status: "Completed",
    features: [
      "Tracked 15+ procurement KPIs across vendors, inventory levels, and payment cycles using advanced Power BI dashboards.",
      "Reduced procurement cycle time by 25% through bottleneck analysis and improved vendor SLA compliance.",
      "Analyzed demand–supply trends and supplier-wise performance to identify procurement inefficiencies and vendor dependency risks.",
      "Delivered data-driven insights supporting inventory planning, procurement optimization, and supply-chain decision-making.",
      "Stakeholder satisfaction improved by 30% through clear, action-oriented visual reporting."
    ],
    githubLink: "https://github.com/Chetanareddy18/Procurement-Intelligence-Vendor-Optimization"
  },
  {
    id: 14,
    title: "Optimizing Hospital Procurement via Supply Chain Analytics",
    description: "Data-driven research paper analyzing hospital procurement efficiency and supplier performance using Power BI dashboards — published as an academic research poster.",
    image: "https://www.mpo-mag.com/wp-content/uploads/sites/7/2024/08/250_main-1.jpg",
    techTags: ["Power BI", "DAX", "SQL", "Data Modeling", "Excel", "SMART Consultancy Framework"],
    status: "Completed",
    features: [
      "Built end-to-end Power BI dashboards monitoring supplier efficiency, fulfillment rates, inventory levels, and re-order patterns across hospital procurement data.",
      "Tracked 15+ procurement KPIs using DAX calculations — including Procurement Cycle Days, Cost Efficiency Rate, and Rejection Rate to identify process inefficiencies.",
      "Analyzed demand–supply trends and supplier-wise performance to uncover procurement bottlenecks and vendor dependency risks.",
      "Delivered data-driven insights supporting inventory planning, procurement optimization, and operational supply-chain decision-making.",
      "Research paper presented as an academic poster at Woxsen University — School of Technology; applied SMART Consultancy framework for structured analytical reporting."
    ],
    githubLink: "https://github.com/Chetanareddy18/Optimizing-Hospital-Procurement-Through-Supply-Chain-Analytics"
  }
];
