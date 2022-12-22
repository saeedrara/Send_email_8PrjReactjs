import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v7x1yvk', 'template_bqsducs', e.target,'user_afhNIbAa8jkksGjPo6RiK')
    .then(result => {
      if(result.status === 200){
        toast.success("پیام شما با موفقیت ارسال شد",{position: "top-right", closeOnClick: true})
      }
    },(error) =>{
      console.log(error)
    })
  }


  return (
    <div className="container py-5">
        <div className="row py-5 justify-content-center">
          <div className="col-md-4 bg-white p-5 mt-5">
            <h2 className="pb-5 text-center">ارسال پیام به مدیریت</h2>
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input type="text" name="name" className="form-control p-3" placeholder="نام شما" />
              </div>
              <div className="form-group">
                <input type="text" name="email" className="form-control p-3" placeholder="ایمیل شما" />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control p-3" placeholder="پیام شما"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-success w-100 p-2 text-white mt-5" value="ارسال" />
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
    </div>
  );
}

export default App;
