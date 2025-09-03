import { Shield, Award, Users, Leaf } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground" data-testid="about-title">
            Professional Summary
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  <Shield className="mr-2 inline" size={20} />
                  Core Expertise
                </h3>
                <p className="text-card-foreground leading-relaxed" data-testid="text-core-expertise">
                  With over 25 years of experience in safety, health, and environment, I am a seasoned expert in optimizing resources through management systems to minimize costs and enhance organizational performance. I have worked in leading industrial, insurance, and construction companies, gaining extensive experience in safety, health, and environmental programs, compliance with legal requirements, and risk management.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  <Award className="mr-2 inline" size={20} />
                  Management Systems
                </h3>
                <p className="text-card-foreground leading-relaxed" data-testid="text-management-systems">
                  My expertise in management systems, including ISO 9001, ISO 14001, and ISO 45001, allows me to design and implement integrated management systems to ensure business excellence and customer satisfaction. I have led multiple audits and certification processes to ensure compliance with international standards.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  <Users className="mr-2 inline" size={20} />
                  Leadership Style
                </h3>
                <p className="text-card-foreground leading-relaxed" data-testid="text-leadership-style">
                  My leadership style is collaborative and empowering, with a focus on building trust-based relationships and promoting accountability among employees. I am committed to promoting a safety culture in organizations, focusing on accident prevention and creating positive work environments.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-8 shadow-lg print-friendly">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  <Leaf className="mr-2 inline" size={20} />
                  Environmental Focus
                </h3>
                <p className="text-card-foreground leading-relaxed" data-testid="text-environmental-focus">
                  I have a passion for sustainability and environmental protection, implementing environmental management programs to reduce waste and promote efficient resource use. My goal is to help organizations achieve excellence in environmental performance while creating positive societal impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
