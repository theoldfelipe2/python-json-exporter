import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { qualificacaoPJ, tributacaoLucro, regimeReconhecimento, regimePisCofins } from '@/data/lists';

const MainForm = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [exportPath, setExportPath] = useState('');
  const [semMovimento, setSemMovimento] = useState(false);
  const [qualificacao, setQualificacao] = useState('');
  const [tributacao, setTributacao] = useState('');
  const [regime, setRegime] = useState('');
  const [regimePis, setRegimePis] = useState('');

  const handleExportPathSelect = () => {
    // TODO: Implement file dialog
    console.log("Selecting export path");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Input 
          value={exportPath}
          placeholder="Caminho para exportar JSON"
          readOnly
          className="flex-1"
        />
        <Button onClick={handleExportPathSelect}>
          Selecionar
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Data Inicial</label>
          <Calendar
            mode="single"
            selected={startDate}
            onSelect={setStartDate}
            className="rounded-md border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Data Final</label>
          <Calendar
            mode="single"
            selected={endDate}
            onSelect={setEndDate}
            className="rounded-md border"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select value={qualificacao} onValueChange={setQualificacao}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Qualificação da PJ" />
          </SelectTrigger>
          <SelectContent>
            {qualificacaoPJ.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={tributacao} onValueChange={setTributacao}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Tributação do Lucro" />
          </SelectTrigger>
          <SelectContent>
            {tributacaoLucro.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={regime} onValueChange={setRegime}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Regime" />
          </SelectTrigger>
          <SelectContent>
            {regimeReconhecimento.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={regimePis} onValueChange={setRegimePis}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Regime PIS/COFINS" />
          </SelectTrigger>
          <SelectContent>
            {regimePisCofins.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox 
          id="semMovimento" 
          checked={semMovimento}
          onCheckedChange={(checked) => setSemMovimento(checked as boolean)}
        />
        <label htmlFor="semMovimento" className="text-sm font-medium">
          Gerar sem movimento?
        </label>
      </div>
    </div>
  );
};

export default MainForm;