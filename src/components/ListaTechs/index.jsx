import ModalEditarApagarTech from "../ModalEditarApagarTech"
import "./styles.css"
import { useState } from "react"

const ListaTechs = ({apagarTech,tec,e ,editarTech}) => {
    const [visible, setVisible] = useState(false)

    return(
        <li className="itensTech" key={e.id} onClick={() => {visible !== true && setVisible(true)}} >
            <ModalEditarApagarTech apagarTech={apagarTech} id={e.id} setVisible={setVisible} visible={visible} editarTech={editarTech}/>
              <img src={tec} alt="img" />
            <div>
            <h3>{e.title}</h3>
            <h5>{e.status}</h5>
            </div>
          </li>
    )
}

export default ListaTechs