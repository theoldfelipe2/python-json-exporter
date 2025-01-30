import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { qualificacaoPJ, tributacaoLucro, regimeReconhecimento, regimePisCofins } from '@/data/lists';

const MainForm = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [exportPath, setExportPath] = useState('');
  const [semMovimento, setSemMovimento] = useState(false);

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
        <Select>
          <Select.Trigger className="w-full">
            <Select.Value placeholder="Qualificação da PJ" />
          </Select.Trigger>
          <Select.Content>
            {qualificacaoPJ.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>

        <Select>
          <Select.Trigger className="w-full">
            <Select.Value placeholder="Tributação do Lucro" />
          </Select.Trigger>
          <Select.Content>
            {tributacaoLucro.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>

        <Select>
          <Select.Trigger className="w-full">
            <Select.Value placeholder="Regime" />
          </Select.Trigger>
          <Select.Content>
            {regimeReconhecimento.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select>

        <Select>
          <Select.Trigger className="w-full">
            <Select.Value placeholder="Regime PIS/COFINS" />
          </Select.Trigger>
          <Select.Content>
            {regimePisCofins.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Content>
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