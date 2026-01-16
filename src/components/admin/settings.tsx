import { Save, Bell, Lock, Globe, Mail, Palette, Database } from "lucide-react";

export function AdminSettings() {
  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="h3 mb-1">Configurações</h1>
          <p className="text-muted">Gerencie as configurações da plataforma</p>
        </div>
      </div>

      <div className="row g-4">
        {/* General Settings */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <div className="d-flex align-items-center gap-2">
                <Globe size={20} className="text-primary-purple" />
                <h5 className="mb-0">Configurações Gerais</h5>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Nome da Plataforma</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Rede Nave"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Descrição</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue="Natureza, Arte, Vida e Emancipação Feminina"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">URL da Plataforma</label>
                  <input
                    type="url"
                    className="form-control"
                    defaultValue="https://redenave.com.br"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <Save size={16} className="me-2" />
                  Salvar Alterações
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Email Settings */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <div className="d-flex align-items-center gap-2">
                <Mail size={20} className="text-primary-purple" />
                <h5 className="mb-0">Configurações de Email</h5>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Email de Remetente</label>
                  <input
                    type="email"
                    className="form-control"
                    defaultValue="contato@redenave.com.br"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nome do Remetente</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Rede Nave"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Servidor SMTP</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="smtp.gmail.com"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <Save size={16} className="me-2" />
                  Salvar Alterações
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <div className="d-flex align-items-center gap-2">
                <Bell size={20} className="text-primary-purple" />
                <h5 className="mb-0">Notificações</h5>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex flex-column gap-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="notif1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="notif1">
                    Notificar novo cadastro de aluna
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="notif2"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="notif2">
                    Notificar conclusão de curso
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="notif3"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="notif3">
                    Enviar relatórios semanais
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="notif4"
                  />
                  <label className="form-check-label" htmlFor="notif4">
                    Notificar eventos próximos
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                <Save size={16} className="me-2" />
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <div className="d-flex align-items-center gap-2">
                <Lock size={20} className="text-primary-purple" />
                <h5 className="mb-0">Segurança</h5>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex flex-column gap-3">
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sec1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="sec1">
                    Requer autenticação de dois fatores
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sec2"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="sec2">
                    Forçar senha forte
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="sec3"
                  />
                  <label className="form-check-label" htmlFor="sec3">
                    Permitir login com redes sociais
                  </label>
                </div>
                <div className="mb-3 mt-2">
                  <label className="form-label">Tempo de sessão (minutos)</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={60}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                <Save size={16} className="me-2" />
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <div className="d-flex align-items-center gap-2">
                <Palette size={20} className="text-primary-purple" />
                <h5 className="mb-0">Aparência</h5>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Cor Primária</label>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="color"
                      className="form-control form-control-color"
                      defaultValue="#6a2e99"
                    />
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="#6a2e99"
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Cor de Destaque</label>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="color"
                      className="form-control form-control-color"
                      defaultValue="#9acd32"
                    />
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="#9acd32"
                      style={{ flex: 1 }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Logo da Plataforma</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <Save size={16} className="me-2" />
                  Salvar Alterações
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Database Settings */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-white py-3">
              <div className="d-flex align-items-center gap-2">
                <Database size={20} className="text-primary-purple" />
                <h5 className="mb-0">Banco de Dados</h5>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <h6 className="mb-3">Backup e Manutenção</h6>
                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-outline-primary">
                    Criar Backup Agora
                  </button>
                  <button className="btn btn-outline-secondary">
                    Restaurar Backup
                  </button>
                  <button className="btn btn-outline-warning">
                    Limpar Cache
                  </button>
                </div>
              </div>
              <div className="alert alert-info mb-0" role="alert">
                <small>
                  <strong>Último backup:</strong> 04 Dez 2024, 03:00
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
