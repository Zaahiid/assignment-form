import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data); // You can replace this with your sign-up function
  };

  return (
    <div className="bg-white w-fit mx-auto mt-11 mb-20 px-7 py-5 rounded-lg font-inter">
      <div>
        <h1 className='text-[#373737] font-medium tracking-wide text-3xl my-4'>Registration form</h1>
        <p className='text-[#8a8a8a] my-3'>Register your account here</p>
        <div className='flex'>
          <div className='w-40 border-b-[1px] self-center'> </div>
          <div className='mx-3'> O </div>
          <div className='w-40 border-b-[1px] self-center'></div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-light mb-1" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
            className="border-[1.5px] border-[#666666] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-light mb-1" htmlFor='password'>
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              })}
              className="border-[1.5px] border-[#666666] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='text-gray-300' />
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm font-light mb-1" htmlFor='confirmPassword'>
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                validate: value =>
                  value === password.current || "The passwords do not match"
              })}
              className="border-[1.5px] border-[#666666] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} className='text-gray-300'/>
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>}
        </div>
        <button type="submit" className='bg-[#d80027] text-white text-sm font-light px-[153px] py-2 my-4 rounded-md'>Sign Up</button>
        <div className='flex items-center justify-center my-3'>
          <a href='#' className='text-[#d80027] underline decoration-solid'>Forgot Password? Click Here</a>
        </div>
        <div className='flex'>
          <div className='w-40 border-b-[1px] self-center'> </div>
          <div className='mx-3'> o </div>
          <div className='w-40 border-b-[1px] self-center'></div>
        </div>
        <div className='flex flex-col items-center justify-center my-3'>
          <h3 className='font-medium mb-2'>Already have an account?</h3>
          <a href='#' className='text-[#d80027] underline decoration-solid underline-offset-1'>Log In</a>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
