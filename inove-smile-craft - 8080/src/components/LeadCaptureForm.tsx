import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    celular: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome.trim() || !formData.celular.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar dados para Google Sheets via Apps Script ou serviço similar
      const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          celular: formData.celular,
          data: new Date().toLocaleString('pt-BR'),
          origem: 'Site Inove Odontologia'
        })
      });

      // Como alternativa, também enviar via WhatsApp
      const whatsappMessage = `*Novo Lead - Site Inove Odontologia*%0A%0A*Nome:* ${formData.nome}%0A*Celular:* ${formData.celular}%0A*Data:* ${new Date().toLocaleString('pt-BR')}`;
      
      // Enviar para o WhatsApp do dono
      window.open(`https://api.whatsapp.com/send?phone=5587981164843&text=${whatsappMessage}`, '_blank');

      toast({
        title: "Dados enviados com sucesso!",
        description: "Entraremos em contato em breve.",
      });

      // Limpar formulário
      setFormData({ nome: '', celular: '' });

    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      
      // Em caso de erro, pelo menos enviar via WhatsApp
      const whatsappMessage = `*Novo Lead - Site Inove Odontologia*%0A%0A*Nome:* ${formData.nome}%0A*Celular:* ${formData.celular}%0A*Data:* ${new Date().toLocaleString('pt-BR')}`;
      window.open(`https://api.whatsapp.com/send?phone=5587981164843&text=${whatsappMessage}`, '_blank');

      toast({
        title: "Dados enviados via WhatsApp!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({ nome: '', celular: '' });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Preencha seus dados e nossa equipe entrará em contato para agendar sua consulta.
            Transforme seu sorriso com os especialistas da Inove Odontologia.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-card">
            <div className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="celular" className="block text-sm font-semibold text-gray-700 mb-2">
                  Celular com WhatsApp *
                </label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="(87) 99999-9999"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full py-4 text-lg font-semibold"
              >
                {isSubmitting ? 'Enviando...' : 'AGENDAR AVALIAÇÃO GRATUITA'}
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Seus dados estão protegidos e serão usados apenas para contato sobre seus tratamentos odontológicos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
