function UserGrid({username, img}:{username:string, img:string}) {
    return(
        <>
            <div className="ml-2">
                <img className="rounded-full" src={img} alt="No" />
                <p className="w-full text-center">{username}</p>
            </div>
        </>
    )
}
export default UserGrid