import React, { useState } from 'react';
import ModelEditor, { Model, Param } from './Example';

const params: Param[] = [
  { id: 1, name: 'Назначение' },
  { id: 2, name: 'Длина' },
];

const initialModel: Model = {
  paramValues: [
    { paramId: 1, value: 'Повседневное' },
    { paramId: 2, value: 'Макс' },
  ],
};

const App: React.FC = () => {
  const [model, setModel] = useState<Model>(initialModel);

  const handleUpdate = (updatedModel: Model) => {
    setModel(updatedModel);
  };

  return (
    <div>
      <h1>Редактор товара</h1>
      <ModelEditor params={params} model={model} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;
