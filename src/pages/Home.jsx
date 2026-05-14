import NewsFeed from '../components/NewsFeed.jsx'
import TopBar from '../components/TopBar.jsx'
import Sidebar from '../components/SideBar.jsx'

function Home({ type }) {
  return (
    <div className='min-h-screen bg-background'>
      <TopBar type={type} />
      <Sidebar/>
      <NewsFeed type={type} />
    </div>
  )
}

export default Home