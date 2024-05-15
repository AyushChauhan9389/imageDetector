const authlayout = ({
    children
}: {
    children: React.ReactNode;
})  => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center">
                {children}
            </div>
        </div>
    );
}

export default authlayout;
