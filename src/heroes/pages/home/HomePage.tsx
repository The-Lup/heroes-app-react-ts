import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/ui/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useState } from 'react';
import { CustomPagination } from '@/components/ui/custom/CustomPagination';
import { CustomBreadcrumbs } from '@/components/ui/custom/CustomBreadCrumbs';

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    'all' | 'favorites' | 'heroes' | 'villains'
  >('all');

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Superhero Universe"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />
        <CustomBreadcrumbs
          currentPage="Super Heroes"
          // breadcrumbs={[
          //   {
          //     label: 'Home1',
          //     to: '/',
          //   },
          //   {
          //     label: 'Home2',
          //     to: '/',
          //   },
          //   {
          //     label: 'Home3',
          //     to: '/',
          //   },
          // ]}
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab('favorites')}
            >
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>
              Heroes (12)
            </TabsTrigger>

            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Show all characters */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            {/* Show all favorites characters */}
            <h1>Favorites</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            {/* Show all heroes characters */}
            <h1>Heroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            {/* Show all villains characters */}
            <h1>Villains</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Results info */}
        {/* <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div> */}

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
