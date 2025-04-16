const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <h1 className="font-bold text-4xl text-center mb-8">Contact Us</h1>
            <form className="w-full max-w-md bg-yellow-100 shadow-2xl rounded-2xl p-8 space-y-6 animate-fade-in">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-1">Message</label>
                    <textarea
                        id="message"
                        placeholder="Type your message here..."
                        rows="4"
                        className="p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 px-6 font-semibold text-white rounded-xl bg-gradient-to-r from-black to-gray-900 relative overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#000000aa]"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"></span>
                    ✨ Submit
                </button>
            </form>
        </div>
    );
};



export default Contact;