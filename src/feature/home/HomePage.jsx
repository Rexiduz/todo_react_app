import React from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../hook/auth-context';
import { useForm } from 'react-hook-form'


function HomePage() {
    const history = useHistory();
    const [loading, setLoading] = React.useState(false);
    const { handleAdminLogin } = React.useContext(AuthContext);
    const { register, handleSubmit, reset, errors } = useForm();

    React.useEffect(() => {
        main();
        return () => {

        }
    }, [])

    async function main() {
        

        return false

    }



    function progress() {
        if (loading == false) {
            return (
                <>
                    <div style={{ minHeight: "100vh" }} className=" bg-primary ">
                        <div className="container d-flex justify-content-center align-content-center pt-5">
                            <div style={{ fontSize: "1.5rem" }} className="spinner-border text-white">
                            </div>   <h3 className='pl-1 text-white'>wait...</h3>
                            {/* {renderLoginForm()} */}
                        </div>
                    </div>

                </>
            )
        }
    }

    const onSubmit = async (data) => {

        try {
            
            let token = await handleAdminLogin(data)
            
            if (token) {
                history.push(`/TodoList`);
            }

        } catch (error) {
        }

    }


    return (

        <>
            <div style={{ minHeight: '100vh' }} className="container-fluid">

                <section className="row justify-content-center pt-5 pl-3 pr-3">

                    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 450, width: '100%', borderRadius: 10 }} className="w-100 bg-white ">
                        <fieldset disabled={loading}>
                            <div className="row ml-0 mr-0">
                                <div style={{ marginBottom: 16, fontSize: '1.5rem', lineHeight: 1 }} className="col-12 pr-0 pl-0 text-center font-weight-bold pt-3"><span>Todo Webapp</span></div>


                                <div style={{ marginBottom: 16 }} className="col-12">
                                    <div className="form-group">
                                        <input ref={register({ required: true })} type="text" name="username" className="form-control" placeholder="username" />
                                        {errors.username && errors.username.type == "required" && <span className='text-danger'>* required</span>}
                                    </div>
                                </div>

                                <div style={{ marginBottom: 16 }} className="col-12">
                                    <div className="form-group">
                                        <input ref={register({ required: true })} type="password" name="password" className="form-control" placeholder="password" />
                                        {errors.password && errors.password.type == "required" && <span className='text-danger'>* required</span>}

                                    </div>
                                </div>


                                <div style={{ marginBottom: 16 }} className="col-12  text-center pb-0 pr-3 pl-3">
                                    <button type="submit" className="btn  blackground-purple light-500 btn-block text-white">
                                        <i className="fas fa-sign-in-alt"></i> Login
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </>

    )
}


export default HomePage

