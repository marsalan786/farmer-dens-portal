import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "@/styles/login.module.css";
// import { Spinner } from "reactstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const Login = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.user.isLoading);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(authenticate(data));
  };

  const [user,setUser]=useState({
    name:"",email:""
  })
  return (
    <div className={style.bg}>
      <div className={style.overlay}>
        <section className="vh-100 style.gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-white text-dark">
                  <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                      <img className="" src="/logo.svg" alt="" />
                      <div
                        className={`mb-md-5 mt-md-4 pb-5 ${style.contentsection}`}
                      >
                        <div className="container-lg">
                          <div>
                            <h1 className={`pt-4 ${style.hello}`}>Hello,</h1>
                            <p className={style.greetingtext}>
                              Welcome Farmer's
                            </p>
                          </div>
                        </div>
                        <div className="form-outline form-white mb-4">
                          <input
                            type="email"
                            id="typeEmailX"
                            placeholder="Email"
                            className="form-control form-control-lg"
                            {...register("email", {
                              required: true,
                              pattern: /\S+@\S+\.\S+/,
                            })}
                          />
                          {errors?.email?.type === "required" && (
                            <p className="error-form-field text-danger">
                              This field is required
                            </p>
                          )}
                          {errors?.email?.type === "pattern" && (
                            <p className="error-form-field text-warning">
                              Email is invalid
                            </p>
                          )}
                        </div>

                        <div className="form-outline form-white mb-4">
                          <input
                            type="password"
                            id="typePasswordX"
                            placeholder="Password"
                            className="form-control form-control-lg"
                            {...register("password", {
                              required: true,
                            })}
                          />
                          {errors?.password?.type === "required" && (
                            <p className="error-form-field text-danger">
                              This field is required
                            </p>
                          )}
                        </div>

                        <p className="small mb-5 pb-lg-2 text-end">
                          <Link href="/forgot/forgot">
                            Forgot your password?
                          </Link>
                        </p>
                        <div className="text-center">
                          <button
                            className="btn btn-success btn-block px-5"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="mb-0">
                          Don't have an account?
                          <Link href="/signup/signup">Signup</Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
