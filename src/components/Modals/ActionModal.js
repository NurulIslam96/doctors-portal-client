import React from "react";

const ActionModal = ({ title, message, closeModal, successAction, modalData }) => {
  // const {} = deleteDr;
  // console.log(deleteDr);
  return (
    <>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="flex justify-between">
            <label htmlFor="confirmation-modal" onClick={()=>successAction(modalData._id)} className="btn btn-sm">
              Confirm
            </label>
            <label htmlFor="confirmation-modal" onClick={closeModal} className="btn btn-sm btn-outline">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionModal;
