'use strict';

/**
 * Conteúdo do portfólio — fonte única de verdade, bilíngue (pt / en).
 *
 * Para adicionar um projeto, experiência ou skill: basta acrescentar um objeto
 * ao array correspondente em AMBOS os idiomas (mesma ordem). O render.js cuida
 * de desenhar tudo na tela. Não é preciso tocar no index.html nem no CSS.
 *
 * Convenções de ícone de link: 'github' | 'live' | 'video' | 'store' | 'doc'.
 */
const CONTENT = {
  // Compartilhado entre idiomas (links, imagens, etc. que não traduzem)
  shared: {
    name: 'Allan Fernando O. de Andrade',
    photo: './assets/images/software-engineer.svg',
    email: 'allan-sjp@hotmail.com',
    phone: '+55 (44) 99826-0968',
    phoneHref: 'tel:+5544998260968',
    github: 'https://github.com/OAllanFernando',
    githubLabel: 'github.com/OAllanFernando',
    linkedin: 'https://www.linkedin.com/in/allan-fernando-software-engineer/',
    linkedinLabel: 'in/allan-fernando-software-engineer',
    cv: 'https://docs.google.com/document/d/1U2yRPYuPiMIkF9QZn4H_20Vfw3B7bEx_d7uFKnmjAc0/edit?usp=sharing',
  },

  pt: {
    langCode: 'pt-br',
    langButtonLabel: 'EN',
    pageTitle: 'Allan Fernando · Software Engineer',

    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Skills',
      contact: 'Contato',
    },

    hero: {
      role: 'Fullstack Software Engineer',
      stack: 'Java / Spring Boot · React / React Native',
      tagline: 'Análise · Desenvolvimento · Arquitetura · Código · Produto',
      summary:
        'Engenheiro de Software full stack com mais de 3 anos de experiência, atuando ' +
        'end-to-end — do levantamento de requisitos e arquitetura ao deploy em nuvem — em ' +
        'sistemas de gestão e plataformas multi-tenant de alcance nacional. Acredito que ' +
        'software é negócio: foco em entregar resultado, não só código.',
      ctaProjects: 'Ver projetos',
      ctaCv: 'Baixar currículo',
      ctaContact: 'Entrar em contato',
      location: 'Paranavaí, PR · Brasil',
      stats: [
        { value: '+3 anos', label: 'de experiência' },
        { value: '16 mil', label: 'usuários no sistema atual' },
        { value: '10', label: 'clientes pagantes no produto próprio' },
      ],
    },

    about: {
      heading: 'Sobre',
      paragraphs: [
        'Sou Engenheiro de Software formado pelo Instituto Federal do Paraná, apaixonado por ' +
          'inovação e por transformar problemas complexos em soluções simples e eficazes. ' +
          'Trabalho com Java/Spring Boot e React/React Native, do back-end ao mobile.',
        'Atuo no ciclo completo do produto — captação de demanda, orçamento, planejamento, ' +
          'desenvolvimento e entrega — com contato direto com clientes e diretoria. Sou ' +
          'referência técnica do meu time e tenho forte domínio de modelagem e otimização ' +
          'de banco de dados.',
      ],
      whatIDoHeading: 'O que eu faço',
      services: [
        {
          icon: './assets/images/icon-server.svg',
          title: 'Back-end',
          text:
            'APIs e serviços robustos com Java/Spring Boot e Node.js. Modelagem de dados, ' +
            'otimização de SQL/procedures, segurança (JWT) e integração entre sistemas.',
        },
        {
          icon: './assets/images/web-programming.svg',
          title: 'Front-end',
          text:
            'Interfaces modernas e responsivas com React, Next.js e Angular. Foco em ' +
            'experiência do usuário, performance e código sustentável.',
        },
        {
          icon: './assets/images/mobile-engineering.svg',
          title: 'Mobile',
          text:
            'Apps multiplataforma com React Native, publicados na App Store e Google Play — ' +
            'inclusive produtos próprios com clientes pagantes em produção.',
        },
      ],
    },

    experience: {
      heading: 'Experiência',
      items: [
        {
          role: 'Engenheiro de Software',
          company: 'NextAge',
          companyUrl: '',
          period: 'dez/2024 – atual',
          location: 'Paranavaí, PR',
          bullets: [
            'Plataforma multi-tenant nacional de controle leiteiro, genealógico e faturamento ' +
              'agropecuário (SRG & SCL): 16 mil usuários e 700 mil animais ativos (3 milhões no histórico).',
            'Concebi e desenvolvi o cálculo de bonificação dos criadores a partir de análise ' +
              'laboratorial do leite — modelagem e processamento de grande volume de dados.',
            'Projetei e propus uma estratégia de modernização da arquitetura com o padrão ' +
              'Strangler Fig, documentada em proposta técnica formal.',
            'Referência técnica do time de 5: apoio a merges, deploys e decisões de arquitetura.',
            'Atuo no ciclo completo e apresento entregas diretamente à mesa diretora da associação.',
          ],
          tech: ['Java', 'Angular', 'Azure (AKS)', 'Kubernetes', 'MySQL', 'Azure DevOps'],
        },
        {
          role: 'Engenheiro de Software',
          company: 'Centro Universitário Unifatecie',
          companyUrl: '',
          period: 'jun/2024 – nov/2024',
          location: 'Remoto',
          bullets: [
            'Inova Carreiras — plataforma de cursos online de instituição com +200 mil alunos: ' +
              'progressão de conteúdo, avaliações e emissão de certificados.',
            'Participei do redesign e da reescrita do sistema (Next.js → arquitetura de Casos ' +
              'de Uso em Java 21 + Spring Boot), incluindo integração de pagamento.',
            'Desbloqueei uma migração de dados via procedures que havia falhado 3 vezes — ' +
              'era o único da equipe com domínio de procedures.',
          ],
          tech: ['Java 21', 'Spring Boot', 'Next.js', 'TypeScript', 'Tailwind', 'TanStack Query', 'MySQL'],
        },
        {
          role: 'Desenvolvedor Full Stack',
          company: 'Ápice Sistemas',
          companyUrl: 'https://www.apicesistemas.com.br/index',
          period: 'mai/2023 – mai/2024',
          location: 'Paranavaí, PR',
          bullets: [
            'Sistemas de gestão: Comanda X (restaurantes/estoque/delivery), GicWeb (condomínios, ' +
              'biometria, WebSockets), entre outros.',
            'Reduzi o tempo de geração de um relatório crítico de 2 minutos para 7 segundos ' +
              'reescrevendo a consulta SQL.',
            'Criei do zero o Sistema de Impressão (Electron) — entregue em ~25 dias e usado por ' +
              'cerca de 100 estabelecimentos.',
            'Responsável por versionamento, deploys em servidores Linux e publicação na ' +
              'App Store e Google Play.',
          ],
          tech: ['Node.js', 'React', 'React Native', 'Electron', 'MySQL', 'WebSockets'],
        },
        {
          role: 'Help Desk / Suporte Técnico',
          company: 'AiqFome / GrandChef',
          companyUrl: '',
          period: 'ago/2021 – mai/2023',
          location: 'Paranavaí, PR',
          bullets: [
            'Suporte a sistemas de gestão financeira e estoque (GrandChef Pro/Desktop, Nota Varejo).',
            'Manutenção de bancos de dados, conexões fiscais e integrações bancárias.',
            'Base de análise de problemas e foco no usuário que carrego para o desenvolvimento.',
          ],
          tech: ['MySQL', 'Suporte', 'Integrações fiscais'],
        },
      ],
    },

    projects: {
      heading: 'Projetos',
      featuredLabel: 'Destaque',
      statusLabel: 'Em produção',
      items: [
        {
          name: 'Sistema de Vigilância',
          featured: true,
          image: '',
          description:
            'Produto próprio (SaaS mobile) para vigilantes autônomos: gestão de mensalidades, ' +
            'alerta de vencimento, lançamento de pagamentos e geração de recibos em PDF via ' +
            'Apache POI, enviados por WhatsApp. Desenvolvido e mantido sozinho, com 10 clientes ' +
            'pagantes e ~27 leads. Publicado na App Store e Google Play.',
          tags: ['React Native', 'Spring Boot', 'Apache POI', 'iOS', 'Android'],
          links: [],
        },
        {
          name: 'timemob',
          featured: true,
          image: '',
          description:
            'SaaS multi-tenant para o setor imobiliário: catálogo de imobiliárias com hub que ' +
            'unifica cadastros para acesso de corretores. Projetado do início ao fim, com ' +
            'infraestrutura 100% automatizada em GitHub Actions (deploy contínuo na main).',
          tags: ['Multi-tenant', 'GitHub Actions', 'CI/CD', 'Ubuntu'],
          links: [],
        },
        {
          name: 'App base React Native + WebSockets',
          featured: false,
          image: './assets/images/mobile.png',
          description:
            'Aplicação base com login (autenticação JWT) e rastreamento, compartilhando ' +
            'localização em tempo real via WebSockets — reaproveitável para acelerar novos projetos.',
          tags: ['React Native', 'JWT', 'WebSockets', 'Spring Boot'],
          links: [
            { label: 'App', url: 'https://github.com/OAllanFernando/app-rn-websockets', type: 'github' },
            { label: 'API', url: 'https://github.com/OAllanFernando/api-websockets', type: 'github' },
            { label: 'Demo', url: 'https://drive.google.com/file/d/1YurrmUCSZp3rw8ZTz2b_r8eBmI2z-BaG/view?usp=sharing', type: 'video' },
          ],
        },
        {
          name: 'Sistema de Empréstimo de Armários',
          featured: false,
          image: './assets/images/homeArmarios.png',
          description:
            'Solução desktop para empréstimo e concessão de armários, implantada em set/2023 e ' +
            'ainda em uso na biblioteca do IFPR Paranavaí. Nasceu de um desafio de engenharia.',
          tags: ['Java', 'Hibernate', 'MVC', 'PostgreSQL', 'Java Swing'],
          links: [
            { label: 'Repositório', url: 'https://github.com/marceloTerencianiIFPR/ArmariosIFPR', type: 'github' },
          ],
        },
        {
          name: 'Sistema de Registro de Tarefas',
          featured: false,
          image: './assets/images/homeTasks.png',
          description:
            'SPA de cadastro de tarefas com tags, autenticação JWT, gráficos e integração com ' +
            'API de feriados. Desenvolvido como desafio técnico (todos os objetivos concluídos).',
          tags: ['React', 'Spring Boot', 'JWT', 'MySQL'],
          links: [
            { label: 'App', url: 'https://github.com/OAllanFernando/agende-tarefas', type: 'github' },
            { label: 'API', url: 'https://github.com/OAllanFernando/api-agende-tarefas', type: 'github' },
            { label: 'Demo', url: 'https://drive.google.com/file/d/1MQljFvSo_4upB2TRMuj5VsMH1FeodgmE/view?usp=sharing', type: 'video' },
          ],
        },
        {
          name: 'iVendi — Sistema de Vendas',
          featured: false,
          image: './assets/images/ivendi.png',
          description:
            'Sistema de vendas de produtos com CRUD de clientes, cidades, estados, produtos e ' +
            'carrinho de compras. Desenvolvido como desafio técnico.',
          tags: ['React', 'Node.js', 'Sequelize', 'MySQL'],
          links: [
            { label: 'App', url: 'https://github.com/OAllanFernando/iVendi', type: 'github' },
            { label: 'API', url: 'https://github.com/OAllanFernando/API_NODE-RegistroDeVendas', type: 'github' },
          ],
        },
      ],
      publicationsHeading: 'Publicações acadêmicas',
      publications: [
        'Artigo (SETIF 2024): uso da Distância de Levenshtein na aproximação de palavras em integrações de sistemas.',
        'TCC: comparativo entre aplicações desktop em Java e JavaScript (sistema de armários).',
      ],
    },

    skills: {
      heading: 'Skills',
      groups: [
        { title: 'Linguagens', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Dart', 'C', 'C++'] },
        { title: 'Back-end', items: ['Spring Boot', 'Node.js', 'Hibernate', 'Django', 'REST'] },
        { title: 'Front-end & Mobile', items: ['React', 'React Native', 'Next.js', 'Angular', 'Redux', 'Tailwind', 'TanStack Query'] },
        { title: 'Banco de Dados', items: ['MySQL', 'PostgreSQL', 'Modelagem', 'Query tuning', 'Procedures', 'Migrações'] },
        { title: 'Cloud & DevOps', items: ['Azure (AKS / DevOps)', 'AWS (EC2, S3, RDS, VPC)', 'Docker', 'Kubernetes', 'GitHub Actions'] },
        { title: 'Arquitetura', items: ['Multi-tenant', 'Microserviços (Strangler Fig)', 'WebSockets'] },
        { title: 'Testes & Ferramentas', items: ['JUnit', 'Jest', 'Mockito', 'Git', 'JHipster', 'Electron', 'Apache POI'] },
      ],
      softHeading: 'Soft skills & idiomas',
      soft: ['Comunicação com stakeholders', 'Metodologias ágeis', 'Resolução de problemas', 'Trabalho em equipe', 'Resiliência'],
      languages: ['Português (nativo)', 'Inglês (B2)', 'Mandarim (básico)'],
    },

    education: {
      heading: 'Formação',
      items: [
        {
          degree: 'Bacharelado em Engenharia de Software',
          institution: 'Instituto Federal do Paraná (IFPR) — Campus Paranavaí',
          period: '2020 – 2024 · concluído',
          detail: 'Carga horária total: 3.208 horas.',
        },
      ],
      certHeading: 'Certificações',
      certs: [
        'Colaborador em Projeto de Inovação — NEPES / IFPR Paranavaí (2023–2024, 994 h)',
        'The Complete 2024 Web Development Bootcamp — Udemy (61,5 h)',
        'Linux Fundamentos — FIAP (40 h)',
        'Contribuição open-source ao projeto JHipster',
      ],
    },

    contact: {
      heading: 'Contato',
      intro: 'Aberto a oportunidades full stack Java (CLT, PJ ou exterior). Vamos conversar?',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      cvLabel: 'Currículo',
      cvText: 'Abrir currículo',
      locationLabel: 'Localização',
    },

    footer: 'Feito com café por Allan Fernando.',
  },

  en: {
    langCode: 'en',
    langButtonLabel: 'PT',
    pageTitle: 'Allan Fernando · Software Engineer',

    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },

    hero: {
      role: 'Fullstack Software Engineer',
      stack: 'Java / Spring Boot · React / React Native',
      tagline: 'Analysis · Development · Architecture · Code · Product',
      summary:
        'Full stack Software Engineer with 3+ years of experience, working end-to-end — from ' +
        'requirements and architecture to cloud deployment — on management systems and ' +
        'nationwide multi-tenant platforms. I believe software is business: I focus on ' +
        'delivering results, not just code.',
      ctaProjects: 'View projects',
      ctaCv: 'Download résumé',
      ctaContact: 'Get in touch',
      location: 'Paranavaí, PR · Brazil',
      stats: [
        { value: '3+ yrs', label: 'of experience' },
        { value: '16k', label: 'users on current system' },
        { value: '10', label: 'paying customers on own product' },
      ],
    },

    about: {
      heading: 'About',
      paragraphs: [
        'I am a Software Engineer (BSc, Federal Institute of Paraná) passionate about ' +
          'innovation and turning complex problems into simple, effective solutions. I work ' +
          'with Java/Spring Boot and React/React Native, from back-end to mobile.',
        'I own the full product cycle — discovery, scoping, planning, development and delivery — ' +
          'with direct contact with clients and executives. I am the technical reference on my ' +
          'team and have strong database modeling and optimization skills.',
      ],
      whatIDoHeading: 'What I do',
      services: [
        {
          icon: './assets/images/icon-server.svg',
          title: 'Back-end',
          text:
            'Robust APIs and services with Java/Spring Boot and Node.js. Data modeling, ' +
            'SQL/procedure tuning, security (JWT) and system integration.',
        },
        {
          icon: './assets/images/web-programming.svg',
          title: 'Front-end',
          text:
            'Modern, responsive interfaces with React, Next.js and Angular. Focus on user ' +
            'experience, performance and maintainable code.',
        },
        {
          icon: './assets/images/mobile-engineering.svg',
          title: 'Mobile',
          text:
            'Cross-platform apps with React Native, published on the App Store and Google Play — ' +
            'including own products with paying customers in production.',
        },
      ],
    },

    experience: {
      heading: 'Experience',
      items: [
        {
          role: 'Software Engineer',
          company: 'NextAge',
          companyUrl: '',
          period: 'Dec 2024 – present',
          location: 'Paranavaí, PR',
          bullets: [
            'Nationwide multi-tenant platform for dairy control, genealogy and agribusiness ' +
              'billing (SRG & SCL): 16k users and 700k active animals (3M in history).',
            'Designed and built the breeders’ bonus calculation from milk lab analysis — ' +
              'data modeling and large-volume processing.',
            'Designed and proposed an architecture modernization strategy using the Strangler ' +
              'Fig pattern, documented in a formal technical proposal.',
            'Technical reference for a team of 5: support on merges, deploys and architecture decisions.',
            'Own the full cycle and present deliverables directly to the association’s board.',
          ],
          tech: ['Java', 'Angular', 'Azure (AKS)', 'Kubernetes', 'MySQL', 'Azure DevOps'],
        },
        {
          role: 'Software Engineer',
          company: 'Unifatecie University Center',
          companyUrl: '',
          period: 'Jun 2024 – Nov 2024',
          location: 'Remote',
          bullets: [
            'Inova Carreiras — online courses platform for an institution with 200k+ students: ' +
              'content progression, assessments and certificate issuance.',
            'Took part in the redesign and rewrite (Next.js → Use-Case architecture in Java 21 + ' +
              'Spring Boot), including payment integration.',
            'Unblocked a data migration via procedures that had failed 3 times — I was the only ' +
              'team member who mastered procedures.',
          ],
          tech: ['Java 21', 'Spring Boot', 'Next.js', 'TypeScript', 'Tailwind', 'TanStack Query', 'MySQL'],
        },
        {
          role: 'Full Stack Developer',
          company: 'Ápice Sistemas',
          companyUrl: 'https://www.apicesistemas.com.br/index',
          period: 'May 2023 – May 2024',
          location: 'Paranavaí, PR',
          bullets: [
            'Management systems: Comanda X (restaurants/stock/delivery), GicWeb (condos, ' +
              'biometrics, WebSockets), among others.',
            'Cut a critical report’s generation time from 2 minutes to 7 seconds by rewriting the SQL query.',
            'Built the Print System (Electron) from scratch — delivered in ~25 days and used by ' +
              'around 100 establishments.',
            'Responsible for versioning, Linux server deploys and App Store / Google Play publishing.',
          ],
          tech: ['Node.js', 'React', 'React Native', 'Electron', 'MySQL', 'WebSockets'],
        },
        {
          role: 'Help Desk / Technical Support',
          company: 'AiqFome / GrandChef',
          companyUrl: '',
          period: 'Aug 2021 – May 2023',
          location: 'Paranavaí, PR',
          bullets: [
            'Support for financial and inventory management systems (GrandChef Pro/Desktop, Nota Varejo).',
            'Database maintenance, fiscal connections and banking integrations.',
            'Problem-analysis and user-focus foundation that I carry into development.',
          ],
          tech: ['MySQL', 'Support', 'Fiscal integrations'],
        },
      ],
    },

    projects: {
      heading: 'Projects',
      featuredLabel: 'Featured',
      statusLabel: 'In production',
      items: [
        {
          name: 'Surveillance Management System',
          featured: true,
          image: '',
          description:
            'Own product (mobile SaaS) for independent security guards: subscription management, ' +
            'due-date alerts, payment entry and PDF receipt generation via Apache POI, delivered ' +
            'over WhatsApp. Built and maintained solo, with 10 paying customers and ~27 leads. ' +
            'Published on the App Store and Google Play.',
          tags: ['React Native', 'Spring Boot', 'Apache POI', 'iOS', 'Android'],
          links: [],
        },
        {
          name: 'timemob',
          featured: true,
          image: '',
          description:
            'Multi-tenant SaaS for the real-estate sector: a directory of agencies with a hub ' +
            'that unifies listings for brokers. Designed end-to-end, with 100% automated ' +
            'infrastructure on GitHub Actions (continuous deploy on main).',
          tags: ['Multi-tenant', 'GitHub Actions', 'CI/CD', 'Ubuntu'],
          links: [],
        },
        {
          name: 'React Native + WebSockets base app',
          featured: false,
          image: './assets/images/mobile.png',
          description:
            'Base application with login (JWT auth) and tracking, sharing location in real time ' +
            'via WebSockets — reusable to speed up new projects.',
          tags: ['React Native', 'JWT', 'WebSockets', 'Spring Boot'],
          links: [
            { label: 'App', url: 'https://github.com/OAllanFernando/app-rn-websockets', type: 'github' },
            { label: 'API', url: 'https://github.com/OAllanFernando/api-websockets', type: 'github' },
            { label: 'Demo', url: 'https://drive.google.com/file/d/1YurrmUCSZp3rw8ZTz2b_r8eBmI2z-BaG/view?usp=sharing', type: 'video' },
          ],
        },
        {
          name: 'Locker Loan Management System',
          featured: false,
          image: './assets/images/homeArmarios.png',
          description:
            'Desktop solution for lending and granting lockers, deployed in Sep 2023 and still ' +
            'in use at the IFPR Paranavaí library. Born from an engineering challenge.',
          tags: ['Java', 'Hibernate', 'MVC', 'PostgreSQL', 'Java Swing'],
          links: [
            { label: 'Repository', url: 'https://github.com/marceloTerencianiIFPR/ArmariosIFPR', type: 'github' },
          ],
        },
        {
          name: 'Task Registration System',
          featured: false,
          image: './assets/images/homeTasks.png',
          description:
            'SPA for task management with tags, JWT authentication, charts and holidays-API ' +
            'integration. Built as a technical challenge (all goals completed).',
          tags: ['React', 'Spring Boot', 'JWT', 'MySQL'],
          links: [
            { label: 'App', url: 'https://github.com/OAllanFernando/agende-tarefas', type: 'github' },
            { label: 'API', url: 'https://github.com/OAllanFernando/api-agende-tarefas', type: 'github' },
            { label: 'Demo', url: 'https://drive.google.com/file/d/1MQljFvSo_4upB2TRMuj5VsMH1FeodgmE/view?usp=sharing', type: 'video' },
          ],
        },
        {
          name: 'iVendi — Sales System',
          featured: false,
          image: './assets/images/ivendi.png',
          description:
            'Product sales system with CRUD of customers, cities, states, products and a ' +
            'shopping-cart layout. Built as a technical challenge.',
          tags: ['React', 'Node.js', 'Sequelize', 'MySQL'],
          links: [
            { label: 'App', url: 'https://github.com/OAllanFernando/iVendi', type: 'github' },
            { label: 'API', url: 'https://github.com/OAllanFernando/API_NODE-RegistroDeVendas', type: 'github' },
          ],
        },
      ],
      publicationsHeading: 'Academic publications',
      publications: [
        'Paper (SETIF 2024): using Levenshtein Distance for word approximation in system integrations.',
        'Thesis: comparison between desktop applications in Java and JavaScript (locker system).',
      ],
    },

    skills: {
      heading: 'Skills',
      groups: [
        { title: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'Dart', 'C', 'C++'] },
        { title: 'Back-end', items: ['Spring Boot', 'Node.js', 'Hibernate', 'Django', 'REST'] },
        { title: 'Front-end & Mobile', items: ['React', 'React Native', 'Next.js', 'Angular', 'Redux', 'Tailwind', 'TanStack Query'] },
        { title: 'Databases', items: ['MySQL', 'PostgreSQL', 'Modeling', 'Query tuning', 'Procedures', 'Migrations'] },
        { title: 'Cloud & DevOps', items: ['Azure (AKS / DevOps)', 'AWS (EC2, S3, RDS, VPC)', 'Docker', 'Kubernetes', 'GitHub Actions'] },
        { title: 'Architecture', items: ['Multi-tenant', 'Microservices (Strangler Fig)', 'WebSockets'] },
        { title: 'Testing & Tools', items: ['JUnit', 'Jest', 'Mockito', 'Git', 'JHipster', 'Electron', 'Apache POI'] },
      ],
      softHeading: 'Soft skills & languages',
      soft: ['Stakeholder communication', 'Agile methodologies', 'Problem-solving', 'Teamwork', 'Resilience'],
      languages: ['Portuguese (native)', 'English (B2)', 'Mandarin (basic)'],
    },

    education: {
      heading: 'Education',
      items: [
        {
          degree: 'BSc in Software Engineering',
          institution: 'Federal Institute of Paraná (IFPR) — Paranavaí Campus',
          period: '2020 – 2024 · completed',
          detail: 'Total workload: 3,208 hours.',
        },
      ],
      certHeading: 'Certifications',
      certs: [
        'Innovation Project Collaborator — NEPES / IFPR Paranavaí (2023–2024, 994 h)',
        'The Complete 2024 Web Development Bootcamp — Udemy (61.5 h)',
        'Linux Fundamentals — FIAP (40 h)',
        'Open-source contribution to the JHipster project',
      ],
    },

    contact: {
      heading: 'Contact',
      intro: 'Open to full stack Java opportunities (CLT, contractor or abroad). Let’s talk?',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      cvLabel: 'Résumé',
      cvText: 'Open résumé',
      locationLabel: 'Location',
    },

    footer: 'Built with coffee by Allan Fernando.',
  },
};
