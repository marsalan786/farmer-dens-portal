import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "@/styles/forgot.module.css";
import Link from "next/link";
const Forgot = () => {
  

  return (
    <div className={style.bg}>
      <div className={style.overlay}>
        <section className="vh-100 style.gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-white text-dark">
                  <div className="card-body">
                    <img className="" src="/logo.svg" alt="" />
                    <div className={`mb-md-5 mt-md-4 pb-5 ${style.contentsection}`}>
                      <div className="container-lg">
                        <div>
                          <h1 className={`pt-4 ${style.hello}`}>Hello,</h1>
                          <p className={style.greetingtext}>Welcome Farmer's</p>
                        </div>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          placeholder="Email"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="text-center">
                        <button
                          className="btn btn-success btn-block px-5"
                          type="submit"
                        >
                          Reset Password
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="mb-0">
                        Back to 
                        <Link href="/login/login">Login</Link>
                        page
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Forgot;
