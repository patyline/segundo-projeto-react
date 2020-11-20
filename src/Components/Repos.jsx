import { useState, useEffect } from 'react'

const Repos = ()=>{
    const [ repositories, setRepositories ] = useState([])
    const [ filtroRepos, setFiltroRepos] = useState([])
    const [ busca, setBusca ] = useState('')

    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://api.github.com/users/patyline/repos')
            const data = await response.json()

            setRepositories(data)
    }
    getData()

    },[])

    useEffect(()=>{
        setFiltroRepos(
            repositories.filter(repo=>{
                return repo.name.includes(busca)
            }
            )
        )

},[busca, repositories])
    

    return(
        <div>
            <input 
            type="text" 
            placeholder="Digite um repo" 
            onChange={e=>{setBusca(e.target.value)}}
            />

            <h2> Meu querido e lindo portfólio</h2>

            <ul>{filtroRepos.map(repo=>{
                return <li key={repo.id}>{repo.name} </li>
        })}</ul>
        </div>
    )

}

export default Repos