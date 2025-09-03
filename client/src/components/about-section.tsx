import { Shield, Award, Users, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="about-title">
            {t.about.title}
          </h2>
          
          <div className="space-y-8">
            {/* Primera fila: Core Expertise */}
            <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
              <h3 className="text-xl font-semibold text-primary mb-4">
                <Shield className="mr-2 inline" size={20} />
                {t.about.coreExpertise.title}
              </h3>
              <p className="text-card-foreground leading-relaxed" data-testid="text-core-expertise">
                {t.about.coreExpertise.description}
              </p>
            </div>
            
            {/* Segunda fila: Management Systems */}
            <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
              <h3 className="text-xl font-semibold text-primary mb-4">
                <Award className="mr-2 inline" size={20} />
                {t.about.managementSystems.title}
              </h3>
              <p className="text-card-foreground leading-relaxed" data-testid="text-management-systems">
                {t.about.managementSystems.description}
              </p>
            </div>
            
            {/* Tercera fila: Leadership Style */}
            <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
              <h3 className="text-xl font-semibold text-primary mb-4">
                <Users className="mr-2 inline" size={20} />
                {t.about.leadershipStyle.title}
              </h3>
              <p className="text-card-foreground leading-relaxed" data-testid="text-leadership-style">
                {t.about.leadershipStyle.description}
              </p>
            </div>
            
            {/* Cuarta fila: Environmental Focus */}
            <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
              <h3 className="text-xl font-semibold text-primary mb-4">
                <Leaf className="mr-2 inline" size={20} />
                {t.about.environmentalFocus.title}
              </h3>
              <p className="text-card-foreground leading-relaxed" data-testid="text-environmental-focus">
                {t.about.environmentalFocus.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
