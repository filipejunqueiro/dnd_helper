import dnd_background from "@/assets/dnd_background.avif";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Scroll,
  Sparkles,
  ShoppingBag,
  Book,
  PawPrint,
  Infinity,
} from "lucide-react";

const Landing = () => {
  const features = [
    {
      title: "Classes",
      description: "View all related to the classes available in the game.",
      icon: <Book className="h-10 w-10 text-primary mb-2" />,
    },
    {
      title: "Items",
      description: "View all related to the items available in the game.",
      icon: <ShoppingBag className="h-10 w-10 text-primary mb-2" />,
    },
    {
      title: "Races",
      description: "View all related to the races available in the game.",
      icon: <Scroll className="h-10 w-10 text-primary mb-2" />,
    },
    {
      title: "Monsters",
      description: "View all related to the monsters available in the game.",
      icon: <PawPrint className="h-10 w-10 text-primary mb-2" />,
    },
    {
      title: "Spells",
      description: "View all related to the spells available in the game.",
      icon: <Sparkles className="h-10 w-10 text-primary mb-2" />,
    },
    {
      title: "Traits",
      description: "View all related to the traits available in the game.",
      icon: <Infinity className="h-10 w-10 text-primary mb-2" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="relative flex-1 flex items-center justify-center min-h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${dnd_background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/20 bg-linear-to-bl from-black/90 via-black/50 to-background backdrop-blur-sm" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
            Master Your Campaign
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 drop-shadow-md">
            Allow your self to conquer the unknown worlds of D&D with the help
            of our tools!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#features">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-background/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/20 hover:text-white"
              >
                View Features
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Gather the information you need to craft the perfect campaign!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-muted/40 hover:border-primary/50 transition-colors duration-300"
              >
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
