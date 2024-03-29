// EditModal.js
const EditModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <button
            className="float-right text-xl font-bold"
            onClick={()=>onClose(!isOpen)}
          >
            &times;
          </button>
          <h2 className="text-xl mb-4">EditModal Title</h2>
          <p>This is a simple Editmodal.</p>
        </div>
      </div>
    );
  };
  
  export default EditModal;
  