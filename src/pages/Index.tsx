import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import MainForm from '@/components/MainForm';
import EventosEspeciais from '@/components/EventosEspeciais';
import { connectToFirebird } from '@/services/database';
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleExport = async () => {
    if (!isConnected) {
      const connected = await connectToFirebird();
      setIsConnected(connected);
      if (!connected) return;
    }

    // TODO: Implement JSON export
    toast({
      title: "Sucesso",
      description: "Arquivo JSON exportado com sucesso!",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Exportador de Dados</h1>
      
      <Tabs defaultValue="principal" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="principal">Principal</TabsTrigger>
          <TabsTrigger value="eventos">Eventos Especiais</TabsTrigger>
        </TabsList>

        <TabsContent value="principal">
          <MainForm />
        </TabsContent>

        <TabsContent value="eventos">
          <EventosEspeciais />
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end">
        <Button size="lg" onClick={handleExport}>
          Exportar JSON
        </Button>
      </div>
    </div>
  );
};

export default Index;