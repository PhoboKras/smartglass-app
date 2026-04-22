import { useState, useEffect, useCallback } from 'react';
import './App.css';
import logo from '../src/assets/logo.png';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: "fas fa-user-shield",  title: "Boas-vindas & MFA",          desc: "Tela inicial · Biometria facial · Token celular" },
    { icon: "fas fa-key",          title: "Token de Acesso",             desc: "Software raiz libera sessão via AAA" },
    { icon: "fas fa-shield-virus", title: "Zero Trust (ZTNA)",           desc: "TLS · VPN · Revalidação contínua" },
    { icon: "fas fa-sitemap",      title: "Hierarquização",              desc: "Azure AD · RBAC · Auditoria AAA" },
    { icon: "fas fa-database",     title: "Proteção de Dados",           desc: "Sanitização local · DLP · Criptografia" }
  ];

  const valueCards = [
    {
      icon: "fas fa-hand-holding-heart",
      title: "Cuidado com as Pessoas",
      desc: "Segurança centrada no usuário: autenticação não invasiva, privacidade garantida e experiência fluida para os colaboradores."
    },
    {
      icon: "fas fa-gavel",
      title: "Integridade",
      desc: "Auditoria contínua com o framework AAA. Todo acesso é rastreável, hierarquizado e em conformidade com as políticas corporativas."
    },
    {
      icon: "fas fa-leaf",
      title: "Sustentabilidade",
      desc: "Processamento local no smartglass reduz tráfego de dados desnecessário, diminuindo consumo energético e pegada de carbono."
    },
    {
      icon: "fas fa-microchip",
      title: "Inovação",
      desc: "Integração de MFA biométrico, Zero Trust e proteção de dados em um dispositivo wearable de nova geração."
    }
  ];

  const techCards = [
    {
      icon: "fas fa-fingerprint",
      title: "Biometria Facial + MFA",
      desc: "Autenticação via biometria facial ou token temporário no celular. Software raiz libera acesso apenas após validação completa do framework AAA."
    },
    {
      icon: "fas fa-shield-virus",
      title: "Zero Trust (ZTNA)",
      desc: "Revalida identidade e contexto a cada troca de rede. Acesso bloqueado automaticamente se o ambiente sair das políticas definidas."
    },
    {
      icon: "fas fa-sitemap",
      title: "Azure AD + Hierarquização",
      desc: "Consulta o nível hierárquico do usuário após validação do token. Cada nível acessa apenas dados e ações correspondentes à sua função."
    },
    {
      icon: "fas fa-key",
      title: "Token JWT + Framework AAA",
      desc: "Tokens de curta duração com Autenticação, Autorização e Auditoria contínua. Controle completo da sessão em tempo real."
    },
    {
      icon: "fas fa-lock",
      title: "TLS + VPN Corporativa",
      desc: "Criptografia ponta a ponta com TLS. VPN garante que o tráfego percorra apenas canais seguros, mesmo em redes de terceiros."
    },
    {
      icon: "fas fa-database",
      title: "DLP + Sanitização Local",
      desc: "Dados processados no dispositivo antes de qualquer transmissão. Camada DLP no backend impede envio de informações não autorizadas."
    }
  ];

  const metrics = [
    { value: "99.99%", label: "Redução de acessos indevidos" },
    { value: "<2s",    label: "Tempo de bloqueio ao remover o óculos" },
    { value: "100%",   label: "Dados criptografados em trânsito" },
    { value: "0",      label: "Dados sensíveis armazenados localmente" }
  ];

  const team = [
    "Caio Querino Salustriano Marques",
    "Alec Lima Ferreira da Silva",
    "Ricardo Gomes de Aquino",
    "Gabriel Viana de Freitas Leão da Costa"
  ];

  const blocks = [
    {
      number: "01",
      icon: "fas fa-user-shield",
      title: "Autenticação e Controle de Acesso",
      color: "#0088e6",
      content: "Nossa solução começa com o usuário vestindo o smartglass. Ao iniciar, o dispositivo exibe uma tela de boas-vindas, solicitando autenticação. Utilizamos MFA, permitindo que o usuário se autentique via biometria facial ou um token temporário no celular. Ao validar, o software raiz — que controla os recursos nativos do SmartGlass — libera um token de acesso. Com o framework AAA (Autenticação, Autorização e Auditoria), garantimos o controle contínuo da sessão.",
      tags: ["MFA", "Biometria Facial", "Token JWT", "Framework AAA"]
    },
    {
      number: "02",
      icon: "fas fa-shield-virus",
      title: "Conexão Segura e Zero Trust",
      color: "#00aaff",
      content: "Após a autenticação, o usuário se conecta à rede da Petrobras. Utilizamos uma abordagem Zero Trust (ZTNA), integrando com protocolos TLS e VPNs. O software raiz monitora o contexto da conexão: ao mudar de rede (por exemplo, de uma rede interna para um serviço externo), o ZTNA revalida a identidade e o contexto. Assim, o software garante que o acesso só continue se o ambiente e o usuário estiverem dentro das políticas definidas.",
      tags: ["ZTNA", "TLS 1.3", "VPN Corporativa", "Revalidação Contínua"]
    },
    {
      number: "03",
      icon: "fas fa-sitemap",
      title: "Hierarquização e Serviços Corporativos",
      color: "#f38020",
      content: "A hierarquização de acesso é feita com base no Azure AD ou outro serviço corporativo. Após a validação do token, o software consulta o nível hierárquico do usuário. Com o framework AAA, o acesso é auditado, e cada nível permite apenas as ações e dados correspondentes à função do usuário. Isso garante que o acesso aos sistemas corporativos seja sempre hierarquizado e rastreável.",
      tags: ["Azure AD", "Hierarquia de Acesso", "Auditoria AAA", "RBAC"]
    },
    {
      number: "04",
      icon: "fas fa-database",
      title: "Proteção de Dados Sensíveis",
      color: "#00cc88",
      content: "Para evitar vazamentos de dados sensíveis (como imagem, áudio e localização), aplicamos sanitização local no smartglass — os dados são processados no dispositivo antes de qualquer transmissão. No backend, uma camada DLP analisa o tráfego para garantir que nenhum dado não autorizado seja enviado. Tudo é criptografado (via TLS) e monitorado pelo ZTNA, com auditoria contínua. Assim, protegemos imagem, áudio e localização, mesmo em redes terceiras.",
      tags: ["Sanitização Local", "DLP Backend", "TLS Encryption", "Zero Trust"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [steps.length]);

  const simulateAuth = useCallback(() => {
    if (isAuthenticated) {
      setIsAuthenticated(false);
      alert('🔒 SIMULAÇÃO: Óculos removido! Sessão bloqueada em menos de 2 segundos.');
    } else {
      setIsAuthenticated(true);
      alert('✅ Reautenticação: Biometria facial validada com sucesso. Sessão restaurada.');
    }
  }, [isAuthenticated]);

  const simulateAttack = useCallback(() => {
    alert('⚠️ TENTATIVA DE ACESSO INDEVIDO SIMULADA\n\n🔐 Resposta do sistema:\n- ZTNA: Contexto inválido detectado\n- Token JWT: Revogado imediatamente\n- AAA: Auditoria registrada\n- SmartGlass: Sessão bloqueada');
    setIsAuthenticated(false);
    setTimeout(() => {
      if (window.confirm('Acesso bloqueado pelo Zero Trust. Deseja reautenticar com biometria?')) {
        setIsAuthenticated(true);
      }
    }, 2000);
  }, []);

  return (
    <>
      {/* ── HEADER ── */}
      <div className="header">
        <div className="header-content">

          <div className="team-logo">
            <div>
              <img src={logo} alt="Logo Guardiões Digitais" />
            </div>
            <div>
              <div className="logo-text">GUARDIÕES DIGITAIS</div>
              <div className="logo-sub">CYBERSECURITY & INNOVATION</div>
            </div>
          </div>

          <div className="badge">
            <i className="fas fa-shield-alt"></i>
            <span>GRAND PRIX SENAI DE INOVAÇÃO 2026</span>
          </div>

          <h1>SmartGlass Seguro</h1>
          <p className="subtitle">
            Autenticação contínua · Zero Trust · MFA · Proteção de Dados Sensíveis
          </p>

          <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ background: '#0066b3', padding: '6px 16px', borderRadius: 20 }}>
              <i className="fas fa-fingerprint"></i> Biometria Facial + MFA
            </span>
            <span style={{ background: '#0066b3', padding: '6px 16px', borderRadius: 20 }}>
              <i className="fas fa-shield-virus"></i> Zero Trust (ZTNA)
            </span>
            <span style={{ background: '#0066b3', padding: '6px 16px', borderRadius: 20 }}>
              <i className="fas fa-sitemap"></i> Azure AD + AAA
            </span>
            <span style={{ background: '#004d26', padding: '6px 16px', borderRadius: 20 }}>
              <i className="fas fa-database"></i> DLP + Sanitização
            </span>
          </div>

        </div>
      </div>

      {/* ── CONTAINER PRINCIPAL ── */}
      <div className="container">

        {/* Valores */}
        <div className="values-section">
          {valueCards.map((card, idx) => (
            <div className="value-card" key={idx}>
              <i className={card.icon}></i>
              <h4>{card.title}</h4>
              <p className="value-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Blocos — Como Funciona */}
        <div className="blocks-section">
          <div className="section-header">
            <i className="fas fa-cogs"></i>
            <h2>Como Funciona o Protótipo</h2>
            <p>Fluxo completo de segurança do SmartGlass Seguro</p>
          </div>
          <div className="blocks-grid">
            {blocks.map((block, idx) => (
              <div className="block-card" key={idx} style={{ '--block-color': block.color }}>
                <div className="block-number">{block.number}</div>
                <div className="block-icon">
                  <i className={block.icon} style={{ color: block.color }}></i>
                </div>
                <h3 className="block-title">{block.title}</h3>
                <p className="block-content">{block.content}</p>
                <div className="block-tags">
                  {block.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="block-tag"
                      style={{ borderColor: block.color, color: block.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Riscos resolvidos */}
        <div className="grid-2">
          <div className="card">
            <div className="card-title">
              <i className="fas fa-database"></i> Dados Sensíveis
            </div>
            <div className="risk-item solved">
              <div className="risk-title">
                <span>📸 Imagem / Áudio / Localização</span>
                <i className="fas fa-check-circle" style={{ color: '#00cc88' }}></i>
              </div>
              <div>
                Capturados em tempo real, mas <strong>nunca armazenados localmente</strong>.
                Sanitização feita no dispositivo antes de qualquer transmissão.
              </div>
              <div className="risk-solution">
                <i className="fas fa-shield"></i> Solução: Memória volátil + DLP + TLS 1.3
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <i className="fas fa-network-wired"></i> Múltiplas Redes & Terceiros
            </div>
            <div className="risk-item solved">
              <div className="risk-title">
                <span>⚠️ Riscos: acesso indevido, vazamento</span>
                <i className="fas fa-check-circle" style={{ color: '#00cc88' }}></i>
              </div>
              <div>
                Dispositivo conectado a Wi-Fi, 4G, satélite e APIs externas.
                ZTNA revalida identidade a cada troca de contexto de rede.
              </div>
              <div className="risk-solution">
                <i className="fas fa-shield"></i> Solução: Zero Trust + VPN + Token JWT
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 40 }}>
          <div className="card-title">
            <i className="fas fa-globe"></i> Proteção em Redes de Terceiros
          </div>
          <div className="risk-item solved">
            <div className="risk-title">
              <span>🌐 VPN + TLS 1.3 + ZTNA</span>
              <i className="fas fa-check-circle" style={{ color: '#00cc88' }}></i>
            </div>
            <div>
              SmartGlass <strong>nunca</strong> chama serviços de terceiros diretamente.
              Todo tráfego passa por camadas de validação Zero Trust antes de atingir o backend corporativo.
            </div>
            <div className="risk-solution">
              <i className="fas fa-shield"></i> Solução: ZTNA + Rate Limiting + Auditoria AAA
            </div>
          </div>
        </div>

        {/* Simulador */}
        <div className="glasses-sim">
          <div className="glasses-card" style={{ borderColor: isAuthenticated ? '#0088e6' : '#ff4444' }}>
            <div className="glasses-icon"><i className="fas fa-vr-cardboard"></i></div>
            <h3>🔐 SmartGlass em uso</h3>
            <div className={`auth-status ${isAuthenticated ? 'auth-true' : 'auth-false'}`}>
              {isAuthenticated
                ? '✅ AUTENTICADO | Biometria validada | ZTNA OK | AAA ativo'
                : '🔒 BLOQUEADO | Sessão encerrada | Zero Trust atuou'}
            </div>
            <button onClick={simulateAuth}>
              <i className="fas fa-sync-alt"></i> Simular: Tirar o óculos
            </button>
            <button onClick={simulateAttack} style={{ background: '#8b0000' }}>
              <i className="fas fa-skull"></i> Simular Acesso Indevido
            </button>
            <p style={{ marginTop: 20, fontSize: '0.8rem', color: '#aaa' }}>
              <i className="fas fa-shield-alt"></i> ZTNA bloqueia acessos fora das políticas definidas em tempo real
            </p>
          </div>
        </div>

        {/* Fluxo animado */}
        <div className="flow-section">
          <div className="flow-title">
            <i className="fas fa-route"></i> Fluxo de Segurança | Arquitetura Zero Trust
          </div>
          <div className="flow-steps">
            {steps.map((step, idx) => (
              <div key={idx} className={`step ${currentStep === idx ? 'active' : ''}`}>
                <div className="step-number">{idx + 1}</div>
                <div className="step-icon"><i className={step.icon}></i></div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Cards */}
        <div className="grid-3">
          {techCards.map((card, idx) => (
            <div key={idx} className="tech-card">
              <i className={card.icon}></i>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Métricas */}
        <div className="card">
          <div className="card-title">
            <i className="fas fa-chart-line"></i> Resultados do SmartGlass Seguro
          </div>
          <div className="metrics">
            {metrics.map((metric, idx) => (
              <div key={idx} className="metric">
                <div className="metric-value">{metric.value}</div>
                <div>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <div style={{ marginBottom: 20 }}>
            <i className="fas fa-shield-alt" style={{ fontSize: '2rem', color: '#0088e6' }}></i>
            <p><strong>Guardiões Digitais</strong> | Grand Prix SENAI de Inovação 2026</p>
          </div>
          <div className="team">
            {team.map((member, idx) => (
              <span key={idx}>{member}</span>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <i className="fas fa-microphone-alt"></i> Porta-voz: Alec Lima Ferreira da Silva
          </p>
          <p style={{ marginTop: 10, fontSize: '0.8rem', color: '#666' }}>
            Orientador: Anthony Freitas | SENAI Rio de Janeiro 2026
          </p>
        </div>

      </div>
    </>
  );
}

export default App;