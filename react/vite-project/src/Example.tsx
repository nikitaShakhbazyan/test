import React, { useState } from 'react';

export interface Param {
  id: number;
  name: string;
}

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
  onUpdate: (model: Model) => void;
}

const ModelEditor: React.FC<Props> = ({ params, model, onUpdate }) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues);

  const handleChange = (paramId: number, value: string) => {
    setParamValues((prevParamValues) =>
      prevParamValues.map((paramValue) =>
        paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
      )
    );
    console.log(paramValues)
  };

  const handleSave = () => {
    onUpdate({ paramValues });
  };

  return (
    <div>
      {params.map((param) => (
        <div key={param.id}>
          <label>{param.name}:</label>
          <input
            type="text"
            value={paramValues.find((pv) => pv.paramId === param.id)?.value || ''}
            onChange={(e) => handleChange(param.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={()=> handleSave}>Save</button>
    </div>
  );
};

export default ModelEditor;
