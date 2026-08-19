\documentclass[a4paper,10pt]{article}
\usepackage[left=0.48in,right=0.48in,top=0.50in,bottom=0.45in]{geometry}
\usepackage[T1]{fontenc}
\usepackage{enumitem}
\usepackage{hyperref}
\usepackage{titlesec}
\usepackage{tabularx}

\hypersetup{colorlinks=true, urlcolor=black, linkcolor=black}

\titleformat{\section}{\large\bfseries}{}{0em}{}[\titlerule]
\titlespacing{\section}{0pt}{4pt}{2pt}

\pagenumbering{gobble}
\setlength{\parindent}{0pt}
\setlist[itemize]{
    leftmargin=*,
    itemsep=0.5pt,
    topsep=0.5pt,
    parsep=0pt
}

\begin{document}

%--- HEADER ------------------------------------------------------------------
\noindent
\begin{minipage}[t]{0.58\textwidth}
    \raggedright
    {\LARGE \textbf{Vedant Sanjay Jadhav}} \\[2pt]
    \small AI Engineer | LLMs $\cdot$ Agentic AI $\cdot$ Multimodal AI \\[1pt]
    \small vedantjadhav1414@gmail.com \quad +91-7410036328
\end{minipage}%
\begin{minipage}[t]{0.42\textwidth}
    \raggedleft
    \small
    \href{https://vedantjadhav-ai.vercel.app/}{vedantjadhav-ai.vercel.app} \\[1pt]
    \href{https://github.com/VedantJadhav701}{github.com/VedantJadhav701} \\[1pt]
    \href{https://linkedin.com/in/vedantjadhav-ai}{linkedin.com/in/vedantjadhav-ai} \quad \href{https://orcid.org/0009-0002-6784-9511}{ORCID}
\end{minipage}

\vspace{0.5pt}

%--- EDUCATION ---------------------------------------------------------------
\section*{Education}
\small
\begin{tabularx}{\textwidth}{@{}l X r r@{}}
B.Tech. (AI \& ML) & Pimpri Chinchwad University, Pune & 8.10 CGPA & 2023--27 \\
\end{tabularx}

\vspace{0.5pt}

%--- EXPERIENCE --------------------------------------------------------------
\section*{Experience}
\small

\textbf{Tech Mahindra} -- \textit{AI Engineer Intern} \hfill Jun. 2026 -- Present, Pune \\
\begin{itemize}
    \item Led the AI team as a Young AI Engineer on the development of \textbf{Indus}, contributing to model experimentation, evaluation, AI system design, and technical implementation.
    \item Worked on \textbf{DSLMs}, \textbf{VLMs}, and Generative AI systems, building pipelines spanning data prep, retrieval, inference, evaluation, and deployment; worked with \textbf{NVIDIA Nemotron 3.5} for LLM experimentation and system development under practical compute constraints.
    \item Designed and implemented \textbf{RAG}, semantic retrieval, and agentic AI workflows using Python, PyTorch, Hugging Face, LangGraph, FastAPI, and Ollama.
\end{itemize}

\vspace{0.5pt}

\textbf{DPulseAI Pvt. Ltd.} -- \textit{AI Engineer Intern} \hfill Oct. 2025 -- Apr. 2026, Pune \\
\begin{itemize}
    \item Built production Generative AI and RAG systems, improving retrieval accuracy by \textbf{35\%} and reducing latency by \textbf{45\%} through hybrid chunking and reranking strategies.
    \item Architected Dockerized LLM inference pipelines with CI/CD and canary deployments, cutting deployment time to \textbf{under 10 minutes} using GitHub Actions and Docker Registry.
    \item Implemented KV-cache quantization and post-deployment drift monitoring, reducing inference memory requirements and improving LLM serving efficiency on consumer-grade hardware.
\end{itemize}

\vspace{0.5pt}

%--- PROJECTS ----------------------------------------------------------------
\section*{Selected AI Projects}
\small

\textbf{\href{https://huggingface.co/vedantjadhav701/SparkAI-50M-Instruct}{SparkAI-50M-A100 -- Hybrid Mamba-Transformer LLM}}
\hfill \href{https://huggingface.co/vedantjadhav701/SparkAI-50M-Instruct}{Hugging Face}
\begin{itemize}
    \item Designed and trained a \textbf{50M-parameter LM from scratch} using a hybrid \textbf{Mamba-2 + GQA} architecture on a single NVIDIA A100 80GB GPU, implementing tokenization, training, checkpointing, and evaluation.
\end{itemize}

\vspace{0.5pt}

\textbf{\href{https://github.com/VedantJadhav701}{Vidya Educational LLM -- Multilingual Educational AI}}
\hfill
\href{https://vidya-edu.vercel.app/}{Live Demo}
\begin{itemize}
    \item Developed a \textbf{1.7B-parameter multilingual Educational LLM} fine-tuned for NCERT Science and Mathematics across \textbf{11 Indian languages}, achieving \textbf{93.3\% aggregate accuracy} on a custom 64-question, 8-script, 4-domain evaluation suite; deployed on Hugging Face Spaces.
\end{itemize}

\vspace{0.5pt}

\textbf{\href{https://github.com/VedantJadhav701}{WinFix OmniAgent -- Agentic Windows Diagnostics}}
\hfill \href{https://github.com/VedantJadhav701}{GitHub}
\begin{itemize}
    \item Built an \textbf{evidence-driven agentic troubleshooting system} with planner--specialist TaskGraph execution, domain-specific diagnostic agents, safety-gated tool execution, and a real-time Gradio control console.
\end{itemize}

\vspace{0.5pt}

\textbf{\href{https://autostack-ai.vercel.app/}{AutoStack AI -- Autonomous ML Lifecycle Platform}}
\hfill \href{https://autostack-ai.vercel.app/}{Live Demo}
\begin{itemize}
    \item Built a \textbf{production-first AutoML platform} that transforms raw CSV data into optimized models and low-latency REST APIs in \textbf{under 60 seconds}, automating profiling, feature engineering, tuning, and deployment.
    \item Implemented parallel hyperparameter optimization across \textbf{Gradient Boosted Trees and Stacking Regressors}, with SHAP-based explainability, sub-\textbf{10ms inference}, and statistical drift monitoring.
\end{itemize}

\vspace{0.5pt}

\textbf{\href{https://github.com/VedantJadhav701/TinyVLM}{TinyVLM -- Lightweight Vision Language Model}}
\hfill \href{https://github.com/VedantJadhav701/TinyVLM}{GitHub}
\begin{itemize}
    \item Built a lightweight \textbf{VLM} integrating a vision encoder with a compact LM for image captioning and visual question answering, implementing feature projection, cross-modal alignment, and instruction-following generation.
\end{itemize}

%--- RESEARCH ----------------------------------------------------------------
\section*{Research \& Publications}
\small
\begin{itemize}
    \item \textbf{[Published, IJEMS 2025 -- Scopus, Best Paper Award]} \textit{Ensemble and Hybrid ML Approaches for Renewable Energy Forecasting} -- \href{https://doi.org/10.5281/zenodo.20040403}{DOI}
    \item \textbf{[Preprint]} \textit{PhysicalMamba: State Space Models for Physical Planning and Robotic Task Execution} -- \href{https://doi.org/10.5281/zenodo.20807261}{DOI}
    \item \textbf{[Preprint]} \textit{RecursiveMAS: A Recursive Multi-Agent Latent Coordination Framework for Embodied Task Optimization} -- \href{https://doi.org/10.5281/zenodo.20097645}{DOI}
    \item \textbf{[Under Review]} \textit{Small Language Models for Clinical Reasoning and Medical Decision Alignment}
\end{itemize}

\vspace{0.5pt}

%--- SKILLS ------------------------------------------------------------------
\section*{Technical Skills}
\small
\begin{itemize}[leftmargin=*, itemsep=1.5pt]
\item \textbf{Languages:} Python, C/C++
\item \textbf{LLM \& Generative AI:} LLMs, SLMs, DSLMs, VLMs, Pretraining, Fine-Tuning (LoRA/QLoRA), RAG, Agentic AI, Multilingual NLP, Inference Optimization
\item \textbf{Model Architectures:} Transformers, Mamba/Mamba-2, GQA, CNNs, RNNs, LSTMs, YOLOv8
\item \textbf{AI Frameworks:} PyTorch, TensorFlow, Hugging Face Transformers, LangChain, LangGraph, Ollama, CrewAI, MCP, Tool Calling
\item \textbf{AI Systems \& MLOps:} FastAPI, Docker, MLflow, Git, GitHub Actions/CI-CD, Model Serving, LLMOps, Drift Monitoring, Canary Deployment
\item \textbf{Data \& Retrieval:} Qdrant, ChromaDB, FAISS, PostgreSQL, MongoDB, Pandas, NumPy
\end{itemize}

\vspace{0.5pt}

%--- ACHIEVEMENTS ------------------------------------------------------------
\section*{Achievements}
\small
\begin{itemize}
    \item \textbf{1st Place} -- Code4Society Hackathon 2026 \hfill \textbf{1st Place} -- CodeApex 24-hr Hackathon, VIT
    \item \textbf{Best Research Paper Award} -- ICCTVB-25 (Scopus Indexed) \hfill \textbf{3rd Place} -- National DevCraft Hackathon, IIT Indore
    \item \textbf{3rd Place} -- National AI Hackathon, IIT Indore
\end{itemize}

\end{document}