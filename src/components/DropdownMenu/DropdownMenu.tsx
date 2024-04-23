import React, { useState } from 'react';
import * as jsonData from '../ServiceData'; // Importera index.ts där JSON-filerna exporteras

interface DropDownMenuProps {
  onSelectFile: (filePath: string) => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onSelectFile }) => {
  const [selectedFile, setSelectedFile] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedFile(selectedValue);
    onSelectFile(selectedValue);
  };

  return (
    <div>
      <label htmlFor="file-select">Choose a JSON file:</label>
      <select id="file-select" value={selectedFile} onChange={handleFileChange}>
        <option value="">Select a file</option>
        {/* Alternativ för att välja JSON-filer */}
        {Object.keys(jsonData).map((fileName, index) => (
          <option key={index} value={fileName}>{fileName}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownMenu;
