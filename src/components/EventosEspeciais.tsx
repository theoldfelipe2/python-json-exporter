import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { tiposEventos } from '@/data/lists';

interface Evento {
  id: number;
  tipo: string;
  dia: string;
}

const EventosEspeciais = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [novoTipo, setNovoTipo] = useState('');
  const [novoDia, setNovoDia] = useState('');

  const adicionarEvento = () => {
    if (novoTipo && novoDia) {
      setEventos([...eventos, {
        id: Date.now(),
        tipo: novoTipo,
        dia: novoDia
      }]);
      setNovoTipo('');
      setNovoDia('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <Select value={novoTipo} onValueChange={setNovoTipo}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Tipo de Evento" />
          </SelectTrigger>
          <SelectContent>
            {tiposEventos.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          type="number"
          min="1"
          max="31"
          placeholder="Dia"
          value={novoDia}
          onChange={(e) => setNovoDia(e.target.value)}
          className="w-32"
        />

        <Button onClick={adicionarEvento}>
          Adicionar Evento
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tipo de Evento</TableHead>
            <TableHead>Dia</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventos.map((evento) => (
            <TableRow key={evento.id}>
              <TableCell>
                {tiposEventos.find(t => t.value === evento.tipo)?.label}
              </TableCell>
              <TableCell>{evento.dia}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EventosEspeciais;