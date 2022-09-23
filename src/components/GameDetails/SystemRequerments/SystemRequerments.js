import React from "react";
import './SystemRequerments.css'

const SystemRequerments = ({systemReq,keyCode}) => {

    return(
        <div className="containerSR">
            <div className="SRInfo">
                <b>Minimum:</b>
                <ul className="tabulator">
                    <li key={keyCode+"MinOS"}>OS: {systemReq.min.OS}</li>
                    <li key={keyCode+"MinProcesor"}>Procesor: {systemReq.min.Procesor}</li>
                    <li key={keyCode+"MinMem"}>RAM: {systemReq.min.Mem}</li>
                    <li key={keyCode+"MinGrphCard"}>Graphics Card: {systemReq.min.GrphCard}</li>
                    <li key={keyCode+"MinStorage"}>Storage: {systemReq.min.Storage}</li>
                </ul>
            </div>
            <div className="vertical_line"></div>
            <div className="SRInfo">
                <b>Recomended:</b>
                <ul className="tabulator">
                    <li key={keyCode+"RecOS"}>OS: {systemReq.rec.OS}</li>
                    <li key={keyCode+"RecProcesor"}>Procesor: {systemReq.rec.Procesor}</li>
                    <li key={keyCode+"RecMem"}>RAM: {systemReq.rec.Mem}</li>
                    <li key={keyCode+"RecGrphCard"}>Graphics Card: {systemReq.rec.GrphCard}</li>
                    <li key={keyCode+"RecStorage"}>Storage: {systemReq.rec.Storage}</li>
                </ul>
            </div>
        </div>
    );
};

export default SystemRequerments;