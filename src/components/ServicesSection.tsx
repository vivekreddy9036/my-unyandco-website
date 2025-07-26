import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Users, 
  PieChart,
  BookOpen,
  Briefcase
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Tax Preparation & Planning",
    description: "Comprehensive tax services including preparation, filing, and strategic planning to minimize your tax liability.",
    features: ["Individual Tax Returns", "Business Tax Planning", "Tax Advisory", "IRS Representation"]
  },
  {
    icon: FileText,
    title: "Audit & Assurance",
    description: "Professional audit services ensuring compliance and providing stakeholders with confidence in financial reporting.",
    features: ["Financial Audits", "Internal Audits", "Compliance Reviews", "Risk Assessment"]
  },
  {
    icon: TrendingUp,
    title: "Financial Consulting",
    description: "Strategic financial advice to help optimize your business operations and drive growth.",
    features: ["Cash Flow Analysis", "Budgeting & Forecasting", "Investment Planning", "Cost Optimization"]
  },
  {
    icon: Shield,
    title: "GST & Compliance",
    description: "Complete GST services and regulatory compliance to keep your business operations smooth and legal.",
    features: ["GST Registration", "Monthly Returns", "Compliance Management", "Advisory Services"]
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Efficient payroll management ensuring accurate and timely processing of employee compensation.",
    features: ["Payroll Processing", "Tax Withholdings", "Benefits Administration", "Compliance Reports"]
  },
  {
    icon: PieChart,
    title: "Financial Reporting",
    description: "Accurate and timely financial statements to help you make informed business decisions.",
    features: ["Monthly Statements", "Annual Reports", "Cash Flow Statements", "Management Reports"]
  },
  {
    icon: BookOpen,
    title: "Bookkeeping",
    description: "Meticulous record-keeping services to maintain accurate financial records for your business.",
    features: ["Daily Transactions", "Bank Reconciliations", "Accounts Management", "Financial Records"]
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Comprehensive business consulting to help you navigate challenges and capitalize on opportunities.",
    features: ["Business Planning", "Performance Analysis", "Process Improvement", "Strategic Guidance"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Professional 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive accounting and financial services tailored to meet your unique needs. 
            From tax preparation to strategic business consulting, I provide expert solutions 
            that drive success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Customized Solutions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every business is unique. Let's discuss how I can tailor my services 
              to meet your specific requirements and help you achieve your financial goals.
            </p>
            <Button variant="accent" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;