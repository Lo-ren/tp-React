import { useState } from "react";
import ModalColorPick from "../ModalColorPick/ModalColorPick";
import { Button } from "react-bootstrap";


const ButtonColorPick = () => {

    //Color inicial del botón
    const [buttonColor, setButtonColor] = useState("#3d7c40");

    //Manejo del modal
    const [showModal, setShowModal] = useState(false);

    //Función para cambiar el color del botón
    const handleColorChange = (color: string) => {
        setButtonColor(color);
    };

    //Función que al hacer click en botón se muestre el modal
    const handleShowModal = () => {
        setShowModal(true);
    } 

  return (
    <div className="m-3">
        <h2> Ejemplo 3 </h2>

        {/* Componente padre */}

        <Button variant="primary" style={{backgroundColor: buttonColor}}
        onClick={handleShowModal}> Cambiar color </Button>

        {/* Componente hijo */}

        {showModal && <ModalColorPick
        show={showModal}
        onHide={() => setShowModal(false)} 
        handleColorChange={handleColorChange}/>
        }

    </div>
  )
}

export default ButtonColorPick