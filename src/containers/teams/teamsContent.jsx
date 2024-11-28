import React, { useState } from 'react'
import './teams.scss'
import { teamData } from '../../mocks/teams'

const TeamsContent = () => {
      const [selectedItem, setSelectedItem] = useState(null);

      const handleItemSelect = (item) => {
    setSelectedItem(item.id);
  };

  return (
     <div className="grid-selection">
      <div className="grid-container">
        {teamData.map((item) => (
          <div 
            key={item.id}
            className={`grid-item ${selectedItem === item.id ? 'selected' : ''}`}
            onClick={() => handleItemSelect(item)}
          >
            <img src={item.icon} alt="icons" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamsContent