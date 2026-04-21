import { useState, useEffect, useCallback } from 'react';
import './App.css';
import logo from '../src/assets/logo.png';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { icon: "fab fa-cloudflare", title: "Cloudflare Edge", desc: "DDoS · WAF · Rate Limiting" },
    { icon: "fas fa-eye", title: "Biometria Íris", desc: "Autenticação contínua" },
    { icon: "fas fa-token", title: "Token JWT", desc: "Expiração curta (5 min)" },
    { icon: "fas fa-shield-virus", title: "Zero Trust", desc: "Cloudflare Tunnel" },
    { icon: "fas fa-brain", title: "IA (UEBA)", desc: "Análise comportamental" }
  ];

  const valueCards = [
    { icon: "fas fa-hand-holding-heart", title: "Cuidado com as Pessoas" },
    { icon: "fas fa-gavel", title: "Integridade" },
    { icon: "fas fa-leaf", title: "Sustentabilidade" },
    { icon: "fas fa-microchip", title: "Inovação" }
  ];

  const techCards = [
    { icon: "fas fa-fingerprint", title: "Biometria Contínua", desc: "Reconhecimento de íris a cada 30 segundos. Sensor de proximidade bloqueia ao remover o óculos." },
    { icon: "fas fa-chart-line", title: "IA de Anomalias (UEBA)", desc: "Modelo ML treinado com padrões de uso. Detecta comportamento suspeito em tempo real." },
    { icon: "fab fa-cloudflare", title: "Cloudflare One", desc: "DDoS Protection · Zero Trust Edge · WAF · API Shield · TLS 1.3 automático", isCloudflare: true },
    { icon: "fas fa-key", title: "Token JWT + TPM", desc: "Tokens de curta duração (5 min) armazenados no Trusted Platform Module." },
    { icon: "fas fa-lock", title: "TLS 1.3 + Cloudflare", desc: "Criptografia ponta a ponta + certificados automáticos + VPN corporativa." },
    { icon: "fas fa-chart-simple", title: "CSIRT Integration", desc: "Logs de auditoria + alertas automáticos via Cloudflare Logpush." }
  ];

  const metrics = [
    { value: "99.99%", label: "Redução de acessos indevidos" },
    { value: "<2s", label: "Tempo de bloqueio ao remover óculos" },
    { value: "100%", label: "Dados criptografados em trânsito" },
    { value: "96%", label: "Ataques bloqueados pelo Cloudflare" }
  ];

  const team = [
    "Caio Querino Salustriano Marques",
    "Alec Lima Ferreira da Silva",
    "Ricardo Gomes de Aquino",
    "Gabriel Viana de Freitas Leão da Costa"
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
      alert('🔒 SIMULAÇÃO: Óculos removido! Sensor de proximidade ativado. Sessão bloqueada em menos de 2 segundos.');
    } else {
      setIsAuthenticated(true);
      alert('✅ Reautenticação biométrica: Íris validada com sucesso. Sessão restaurada.');
    }
  }, [isAuthenticated]);

  const simulateAttack = useCallback(() => {
    alert('⚠️ ATAQUE DDoS SIMULADO: 10.000 req/seg detectado\n\n🔐 Resposta Cloudflare:\n- DDoS Protection: ATIVADO\n- Rate Limiting: BLOQUEADO\n- WAF: MITIGADO\n- SmartGlass: Sessão protegida');
    setIsAuthenticated(false);
    setTimeout(() => {
      if (window.confirm('Cloudflare mitigou o ataque. Deseja reautenticar com biometria válida?')) {
        setIsAuthenticated(true);
      }
    }, 2000);
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="team-logo">
            <div>
              <img src={logo} alt="Logo" />
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
          <p className="subtitle">Autenticação contínua + Zero Trust + IA + Cloudflare Edge Security</p>
          <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ background: '#0066b3', padding: '6px 16px', borderRadius: 20 }}><i className="fas fa-eye"></i> Biometria de Íris</span>
            <span style={{ background: '#0066b3', padding: '6px 16px', borderRadius: 20 }}><i className="fas fa-chart-line"></i> IA (UEBA)</span>
            <span style={{ background: '#0066b3', padding: '6px 16px', borderRadius: 20 }}><i className="fas fa-lock"></i> Zero Trust</span>
            <span style={{ background: '#f38020', padding: '6px 16px', borderRadius: 20 }}><i className="fab fa-cloudflare"></i> Cloudflare</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cloudflare-banner">
          <div><i className="fab fa-cloudflare"></i> <span>Cloudflare One</span> <small>| DDoS Protection · Zero Trust Edge · WAF · API Shield</small></div>
          <div><i className="fas fa-shield-alt"></i> Proteção contra ataques de rede + Certificado SSL/TLS gerenciado</div>
        </div>

        <div className="values-section">
          {valueCards.map((card, idx) => (
            <div className="value-card" key={idx}>
              <i className={card.icon}></i>
              <h4>{card.title}</h4>
            </div>
          ))}
        </div>

        <div className="grid-2">
          <div className="card">
            <div className="card-title"><i className="fas fa-database"></i> 1. Dados Sensíveis</div>
            <div className="risk-item solved">
              <div className="risk-title"><span>📸 Imagem / Áudio / Localização</span> <i className="fas fa-check-circle" style={{ color: '#00cc88' }}></i></div>
              <div>Capturados em tempo real, mas <strong>nunca armazenados localmente</strong>.</div>
              <div className="risk-solution"><i className="fas fa-shield"></i> Solução: Memória volátil + Criptografia ponta a ponta (TLS 1.3 + Cloudflare SSL)</div>
            </div>
          </div>
          <div className="card">
            <div className="card-title"><i className="fas fa-network-wired"></i> 2. Múltiplas Redes & Terceiros</div>
            <div className="risk-item solved">
              <div className="risk-title"><span>⚠️ Riscos: acesso indevido, vazamento</span> <i className="fas fa-check-circle" style={{ color: '#00cc88' }}></i></div>
              <div>Dispositivo conectado a Wi-Fi, 4G, satélite e APIs externas.</div>
              <div className="risk-solution"><i className="fas fa-shield"></i> Solução: Zero Trust + Cloudflare Tunnel + Token JWT</div>
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 40 }}>
          <div className="card-title"><i className="fas fa-globe"></i> 3. Proteção em Redes de Terceiros</div>
          <div className="risk-item solved">
            <div className="risk-title"><span>🌐 VPN + TLS 1.3 + Cloudflare WAF</span> <i className="fas fa-check-circle" style={{ color: '#00cc88' }}></i></div>
            <div>Smartglass NUNCA chama serviços de terceiros diretamente. Cloudflare filtra tráfego malicioso.</div>
            <div className="risk-solution"><i className="fas fa-shield"></i> Solução: Cloudflare DDoS + Rate Limiting + API Shield</div>
          </div>
        </div>

        <div className="glasses-sim">
          <div className="glasses-card" style={{ borderColor: isAuthenticated ? '#0088e6' : '#ff4444' }}>
            <div className="glasses-icon"><i className="fas fa-vr-cardboard"></i></div>
            <h3>🔐 SmartGlass em uso</h3>
            <div className={`auth-status ${isAuthenticated ? 'auth-true' : 'auth-false'}`}>
              {isAuthenticated ? '✅ AUTENTICADO | Íris validada | Cloudflare Edge OK' : '🔒 BLOQUEADO | Sessão expirada | Cloudflare bloqueou tentativa'}
            </div>
            <button onClick={simulateAuth}><i className="fas fa-sync-alt"></i> Simular: Tirar o óculos</button>
            <button onClick={simulateAttack} style={{ background: '#8b0000' }}><i className="fas fa-skull"></i> Simular Ataque DDoS</button>
            <p style={{ marginTop: 20, fontSize: '0.8rem', color: '#aaa' }}><i className="fas fa-cloud"></i> Cloudflare bloqueia 96% dos ataques antes do backend</p>
          </div>
        </div>

        <div className="flow-section">
          <div className="flow-title"><i className="fab fa-cloudflare"></i> Cloudflare + Zero Trust | Arquitetura Edge</div>
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

        <div className="grid-3">
          {techCards.map((card, idx) => (
            <div key={idx} className={`tech-card ${card.isCloudflare ? 'cloudflare-card' : ''}`}>
              <i className={card.icon}></i>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-title"><i className="fas fa-chart-line"></i> Resultados com Cloudflare + SmartGlass</div>
          <div className="metrics">
            {metrics.map((metric, idx) => (
              <div key={idx} className="metric">
                <div className="metric-value">{metric.value}</div>
                <div>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer">
          <div style={{ marginBottom: 20 }}>
            <i className="fas fa-shield-haltered" style={{ fontSize: '2rem', color: '#0088e6' }}></i>
            <p><strong>Guardiões Digitais</strong> | Grand Prix SENAI de Inovação 2026</p>
          </div>
          <div className="team">
            {team.map((member, idx) => (
              <span key={idx}>{member}</span>
            ))}
          </div>
          <p style={{ marginTop: 20 }}><i className="fas fa-microphone-alt"></i> Porta-voz: Alec Lima Ferreira da Silva</p>
          <p style={{ marginTop: 10, fontSize: '0.8rem' }}><i className="fab fa-cloudflare"></i> Cloudflare Security Partner | Orientador: Anthony Freitas | SENAI Rio de Janeiro 2026</p>
        </div>
      </div>
    </>
  );
}

export default App;