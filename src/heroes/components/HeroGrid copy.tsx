import { Heart, Eye, Zap, Brain, Gauge, Shield } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import { HeroGridCard } from './HeroGridCard';

export const HeroGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {/* Hero Card 1 - Superman */}
      <HeroGridCard />

      {/* Hero Card 2 - Batman */}
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Batman"
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <Badge
              variant="secondary"
              className="text-xs bg-white/90 text-gray-700"
            >
              Active
            </Badge>
          </div>

          <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
            DC
          </Badge>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-bold text-lg leading-tight">Batman</h3>
              <p className="text-sm text-gray-600">Bruce Wayne</p>
            </div>
            <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
              Hero
            </Badge>
          </div>
          <Badge variant="outline" className="w-fit text-xs">
            Justice League
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600 line-clamp-2">
            The Dark Knight of Gotham City, using fear as a weapon against crime
            and corruption.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-orange-500" />
                <span className="text-xs font-medium">Strength</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Brain className="h-3 w-3 text-blue-500" />
                <span className="text-xs font-medium">Intelligence</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Gauge className="h-3 w-3 text-green-500" />
                <span className="text-xs font-medium">Speed</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-purple-500" />
                <span className="text-xs font-medium">Durability</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-sm">Powers:</h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">
                Martial Arts
              </Badge>
              <Badge variant="outline" className="text-xs">
                Detective Skills
              </Badge>
              <Badge variant="outline" className="text-xs bg-gray-100">
                +3 more
              </Badge>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-2 border-t">
            First appeared: 1939
          </div>
        </CardContent>
      </Card>

      {/* Hero Card 3 - Wonder Woman */}
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Wonder Woman"
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <Badge
              variant="secondary"
              className="text-xs bg-white/90 text-gray-700"
            >
              Active
            </Badge>
          </div>

          <Badge className="absolute top-3 right-3 text-xs bg-blue-600 text-white">
            DC
          </Badge>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-bold text-lg leading-tight">Wonder Woman</h3>
              <p className="text-sm text-gray-600">Diana Prince</p>
            </div>
            <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
              Hero
            </Badge>
          </div>
          <Badge variant="outline" className="w-fit text-xs">
            Justice League
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600 line-clamp-2">
            Amazonian princess and warrior, champion of truth, justice, and
            equality.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-orange-500" />
                <span className="text-xs font-medium">Strength</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Brain className="h-3 w-3 text-blue-500" />
                <span className="text-xs font-medium">Intelligence</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Gauge className="h-3 w-3 text-green-500" />
                <span className="text-xs font-medium">Speed</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-purple-500" />
                <span className="text-xs font-medium">Durability</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-sm">Powers:</h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">
                Super Strength
              </Badge>
              <Badge variant="outline" className="text-xs">
                Flight
              </Badge>
              <Badge variant="outline" className="text-xs bg-gray-100">
                +4 more
              </Badge>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-2 border-t">
            First appeared: 1941
          </div>
        </CardContent>
      </Card>

      {/* Hero Card 4 - Spider-Man */}
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Spider-Man"
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <Badge
              variant="secondary"
              className="text-xs bg-white/90 text-gray-700"
            >
              Active
            </Badge>
          </div>

          <Badge className="absolute top-3 right-3 text-xs bg-red-600 text-white">
            Marvel
          </Badge>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-bold text-lg leading-tight">Spider-Man</h3>
              <p className="text-sm text-gray-600">Peter Parker</p>
            </div>
            <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
              Hero
            </Badge>
          </div>
          <Badge variant="outline" className="w-fit text-xs">
            Avengers
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600 line-clamp-2">
            Your friendly neighborhood Spider-Man, with great power comes great
            responsibility.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-orange-500" />
                <span className="text-xs font-medium">Strength</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Brain className="h-3 w-3 text-blue-500" />
                <span className="text-xs font-medium">Intelligence</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Gauge className="h-3 w-3 text-green-500" />
                <span className="text-xs font-medium">Speed</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-purple-500" />
                <span className="text-xs font-medium">Durability</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-sm">Powers:</h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">
                Wall Crawling
              </Badge>
              <Badge variant="outline" className="text-xs">
                Spider Sense
              </Badge>
              <Badge variant="outline" className="text-xs bg-gray-100">
                +3 more
              </Badge>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-2 border-t">
            First appeared: 1962
          </div>
        </CardContent>
      </Card>

      {/* Hero Card 5 - Iron Man */}
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Iron Man"
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <Badge
              variant="secondary"
              className="text-xs bg-white/90 text-gray-700"
            >
              Active
            </Badge>
          </div>

          <Badge className="absolute top-3 right-3 text-xs bg-red-600 text-white">
            Marvel
          </Badge>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-bold text-lg leading-tight">Iron Man</h3>
              <p className="text-sm text-gray-600">Tony Stark</p>
            </div>
            <Badge className="text-xs bg-green-100 text-green-800 border-green-200">
              Hero
            </Badge>
          </div>
          <Badge variant="outline" className="w-fit text-xs">
            Avengers
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600 line-clamp-2">
            Billionaire genius inventor who uses his technology to protect the
            world.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-orange-500" />
                <span className="text-xs font-medium">Strength</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Brain className="h-3 w-3 text-blue-500" />
                <span className="text-xs font-medium">Intelligence</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Gauge className="h-3 w-3 text-green-500" />
                <span className="text-xs font-medium">Speed</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-purple-500" />
                <span className="text-xs font-medium">Durability</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-sm">Powers:</h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">
                Powered Armor
              </Badge>
              <Badge variant="outline" className="text-xs">
                Genius Intellect
              </Badge>
              <Badge variant="outline" className="text-xs bg-gray-100">
                +3 more
              </Badge>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-2 border-t">
            First appeared: 1963
          </div>
        </CardContent>
      </Card>

      {/* Hero Card 6 - Deadpool */}
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Deadpool"
            className="object-cover transition-all duration-500 group-hover:scale-110"
          />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <Badge
              variant="secondary"
              className="text-xs bg-white/90 text-gray-700"
            >
              Active
            </Badge>
          </div>

          <Badge className="absolute top-3 right-3 text-xs bg-red-600 text-white">
            Marvel
          </Badge>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white"
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </Button>

          <Button
            size="sm"
            variant="ghost"
            className="absolute bottom-3 left-3 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-bold text-lg leading-tight">Deadpool</h3>
              <p className="text-sm text-gray-600">Wade Wilson</p>
            </div>
            <Badge className="text-xs bg-yellow-100 text-yellow-800 border-yellow-200">
              Anti-Hero
            </Badge>
          </div>
          <Badge variant="outline" className="w-fit text-xs">
            X-Force
          </Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600 line-clamp-2">
            The Merc with a Mouth, an unpredictable anti-hero with accelerated
            healing powers.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-orange-500" />
                <span className="text-xs font-medium">Strength</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Brain className="h-3 w-3 text-blue-500" />
                <span className="text-xs font-medium">Intelligence</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Gauge className="h-3 w-3 text-green-500" />
                <span className="text-xs font-medium">Speed</span>
              </div>
              <Progress value={70} className="h-2" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-purple-500" />
                <span className="text-xs font-medium">Durability</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-sm">Powers:</h4>
            <div className="flex flex-wrap gap-1">
              <Badge variant="outline" className="text-xs">
                Healing Factor
              </Badge>
              <Badge variant="outline" className="text-xs">
                Martial Arts
              </Badge>
              <Badge variant="outline" className="text-xs bg-gray-100">
                +3 more
              </Badge>
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-2 border-t">
            First appeared: 1991
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
