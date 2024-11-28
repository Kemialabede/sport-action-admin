import React, { useState } from 'react'
import Modal from '../../components/modal/modal';
import Input from '../../components/input'
import { Formik } from 'formik';
import Button from '../../components/button';
import SelectComp from '../../components/select';
import { BlockPicker } from 'react-color';
import './teams.scss';
import NFL14 from '../../assets/icons/NFL Smoke Helmet (14) 1.svg'

const AddNewTeamModal = ({ isShown, onCloseComplete }) => {
      const [selectedColor, setSelectedColor] = useState('#000000');

       const customStyles = {
    default: {
      picker: {
        boxShadow: 'none',
        backgroundColor: 'transparent'
      },
      saturation: {
        display: 'none'
      },
      controls: {
        display: 'none'
      },
      color: {
        display: 'none'
      },
      hex: {
        display: 'none'
      }
    }
  };


      const colors = [
    '#FF6B6B', // Coral Red
    '#4ECDC4', // Turquoise
    '#45B7D1', // Sky Blue
    '#FDCB6E', // Sunflower Yellow
    '#6C5CE7', // Purple
    '#A8E6CF', // Mint Green
    '#FF8ED4', // Pink
    '#5F27CD', // Deep Purple
    '#10AC84', // Emerald Green
    '#222F3E'  // Dark Slate,
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  return (
      <Modal
      isShown={isShown}
      onCloseComplete={onCloseComplete}
      title="Add Team"
    >
            <Formik>
                {() => {
                    return(
                        <>
                        <div>
                        <SelectComp label="Select category" />
                        </div>
                        <div>
                        <p className='adminAddInput__label' style={{ marginTop: '8px'}}>Team Logo</p>
                        <div className='selectTextArea' style={{ marginBottom: '8px'}}>
                            <div className='selectTextArea__content'>
                                <img src={NFL14} />
                            <p>Replace Logo</p>
                            </div>
                        </div>
                        </div>
                        <Input title="Team name" labelClass="adminAddInput__label" />
                        <SelectComp label="Select color" />
                        <div style={{ margin: '32px 0 28px 0'}}>
                            <BlockPicker 
                            width='100%'
                            triangle="hide"
          colors={colors}
          color={selectedColor}
          onChange={handleColorChange}
          styles={customStyles}
        />
                        </div>
                        <Button theme="primary" size="lg">Create Team</Button>
                        </>
                    )
                }}
            </Formik>
    </Modal>
  )
}

export default AddNewTeamModal