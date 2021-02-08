import React,{Component} from 'react'
import axios from 'axios'
import './userCrud.css'
import ContentHeader from '../common/template/contentHeader'



const baseURL = 'http://localhost:3001/servicos'
const initialState={
    user:{tipo:'',preco:''},
    list:[]
}

export default class Servicos extends Component{

    state={...initialState}

    componentWillMount(){
        axios(baseURL).then(resp=>{
            this.setState({list: resp.data})

        })

    }

    clear(){
        this.setState({user: initialState.user})
    }
    save(){
        const user=this.state.user
        const method=user.id ? 'put' : 'post' //put altera e post vai incluir
        const url=user.id ? `${baseURL}/${user.id}`:baseURL
        axios[method] (url,user)
        .then(resp=>{
            const list = this.getUpdatedList(resp.data)
            this.setState({user:initialState.user,list})

        })

    }

    getUpdatedList(user,add=true){
        const list=this.state.list.filter(u=>u.id !== user.id)
        if(add)list.unshift(user)
        return list

    }
    
    updateField(event){
        const user={...this.state.user}
        user[event.target.name]=event.target.value
        this.setState({user})

    }

    render() {
        return (
            
            <div className="form">
                <ContentHeader title='Cadastro de serviços' small='Inclusão,listagem,alteração e exclusão' />
                <h1></h1>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                           <label>Tipo</label>
                            <input type="text" className="form-control"
                                name="tipo"
                                value={this.state.user.tipo}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o tipo do serviço..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Preço</label>
                            <input type="number" className="form-control"
                                name="preco"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o preço do serviço..." />
                        </div>
                    </div>
                    

                        
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
                <div>
                <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Preço</th>
                        </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
                </div>
            </div>
        )
    }
    load(user){
        this.setState({user})

    }

    remove(user){
        axios.delete(`${baseURL}/${user.id}`).then(resp=>{
            const list=this.getUpdatedList(user,false)
            this.setState({list})
        })
    }

    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Preço</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user=>{
            return(
                <tr key={user.id}>
                   <td>{user.id}</td> 
                   <td>{user.tipo}</td> 
                   <td>{user.preco} R$</td>
                   <td>
                       <button className="btn btn-warning"
                           onClick={()=>this.load(user)}>
                           <i className="fa fa-pencil"></i>
                       </button>
                       <button className="btn btn-danger ml-2"
                       onClick={()=>this.remove(user)}>
                           <i className="fa fa-trash"></i>
                       </button>

                   </td>
                </tr>
            )
        })

    }

}