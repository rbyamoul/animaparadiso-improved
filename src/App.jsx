import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, MapPin, Phone, Mail, Star, PawPrint, Home, Shield, Clock } from 'lucide-react'
import './App.css'

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Marie D.",
      text: "Cécile s'est occupée de mon chat Minou pendant mes vacances. Il était détendu et heureux à mon retour. Je recommande vivement !",
      rating: 5,
      animal: "Chat"
    },
    {
      name: "Pierre L.",
      text: "Un service exceptionnel ! Mon chien Rex a été choyé comme s'il était chez lui. Merci Cécile !",
      rating: 5,
      animal: "Chien"
    },
    {
      name: "Sophie M.",
      text: "Professionnelle et passionnée, Cécile a pris soin de mes lapins avec beaucoup d'amour. Je suis très satisfaite.",
      rating: 5,
      animal: "Lapins"
    }
  ]

  const services = [
    {
      icon: <Home className="w-8 h-8 text-green-600" />,
      title: "Hébergement à domicile",
      description: "Vos animaux sont accueillis dans un environnement familial chaleureux avec jardin."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Soins personnalisés",
      description: "Attention particulière aux besoins spécifiques de chaque animal."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Sécurité garantie",
      description: "Certificat de capacité pour animaux domestiques et non domestiques."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Disponibilité flexible",
      description: "Service adapté à vos dates de vacances et besoins spécifiques."
    }
  ]

  const animals = [
    {
      name: "LUCKY",
      type: "Chat Européen",
      gender: "Mâle",
      birth: "16 Septembre 2012",
      traits: ["Doux", "Câlin", "Joueur"],
      image: "🐱"
    },
    {
      name: "EMIE",
      type: "Chat Européen",
      gender: "Femelle",
      birth: "08 Septembre 2012",
      traits: ["Câline", "Discrète", "Futée"],
      image: "🐱"
    },
    {
      name: "OCTAVE",
      type: "Chien",
      gender: "Mâle",
      birth: "03 Décembre 2018",
      traits: ["Câlin", "Obéissant", "Joueur"],
      image: "🐕"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Anima Paradiso</h1>
                <p className="text-sm text-gray-600">Hébergement d'Animaux</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
              <a href="#animals" className="text-gray-700 hover:text-green-600 transition-colors">Nos Animaux</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Témoignages</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              <Phone className="w-4 h-4 mr-2" />
              Contactez-nous
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Garde d'animaux au domicile du Pet Sitter
          </h2>
          <p className="text-xl text-gray-600 mb-4">Les Mureaux, Yvelines</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg py-2 px-4">Chiens</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">Chats</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">Rongeurs</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">Oiseaux</Badge>
          </div>
          <p className="text-2xl text-green-600 font-semibold mb-8">« Comme à la Maison »</p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
            Réserver maintenant
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Ma passion pour les animaux</h3>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                Ma passion pour les animaux date de mon enfance. À la maison, nous avons deux chats et 
                un chien de petite race qui cohabitent parfaitement.
              </p>
              <p>
                Durant des années, j'ai exercé dans le domaine animalier et j'ai obtenu mon certificat 
                de capacité pour les animaux domestiques et non domestiques.
              </p>
              <p>
                Ayant un très grand intérêt pour les animaux, je ressens une grande motivation pour 
                m'occuper de ces petits êtres au quotidien.
              </p>
              <p className="text-green-600 font-semibold">
                Chez nous, vos compagnons auront également des vacances avec un beau jardin et 
                beaucoup d'amour de notre part.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Animals Section */}
      <section id="animals" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Animaux</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {animals.map((animal, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-6xl mb-4">{animal.image}</div>
                  <CardTitle className="text-2xl text-green-600">{animal.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {animal.type} • {animal.gender}
                  </CardDescription>
                  <p className="text-sm text-gray-500">Né le {animal.birth}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {animal.traits.map((trait, traitIndex) => (
                      <Badge key={traitIndex} variant="outline">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Témoignages</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 mb-6 italic">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                  <div className="text-lg font-semibold text-gray-800">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    Propriétaire de {testimonials[activeTestimonial].animal}
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Au plaisir de vous voir</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <div className="text-left">
                <p className="font-semibold">Adresse</p>
                <p className="text-sm">47 Rue Grégoire Leclos</p>
                <p className="text-sm">78130 Les Mureaux</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <p className="font-semibold">Téléphone</p>
                <p className="text-sm">06 74 37 72 21</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" />
              <div className="text-left">
                <p className="font-semibold">Email</p>
                <p className="text-sm">cecile@animaparadiso.fr</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <div className="text-left">
                <p className="font-semibold">Coordonnées</p>
                <p className="text-sm">48.982613, 1.908174</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <Mail className="w-4 h-4 mr-2" />
              Contactez-nous maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <PawPrint className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">Anima Paradiso</span>
          </div>
          <p className="text-gray-400 mb-4">
            Hébergement et garde d'animaux avec amour et professionnalisme
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Anima Paradiso. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

