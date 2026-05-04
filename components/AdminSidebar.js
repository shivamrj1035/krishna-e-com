'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './AdminSidebar.module.css';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  Settings,
  LogOut,
  ExternalLink,
  MessageSquare,
  Ticket,
  Image as ImageIcon,
  Megaphone,
  UserCheck,
  LifeBuoy,
  Layers,
  Star
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuGroups = [
    {
      title: 'Main',
      items: [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Orders', path: '/admin/orders', icon: ShoppingBag, count: 25 },
        { name: 'Products', path: '/admin/products', icon: Package },
        { name: 'Collections', path: '/admin/collections', icon: Layers },
        { name: 'Customers', path: '/admin/customers', icon: Users },
      ]
    },
    {
      title: 'Management',
      items: [
        { name: 'Reviews', path: '/admin/reviews', icon: Star },
        { name: 'Coupons', path: '/admin/coupons', icon: Ticket },
        { name: 'Blog / Posts', path: '/admin/blog', icon: MessageSquare },
        { name: 'Banners', path: '/admin/banners', icon: ImageIcon },
      ]
    },
    {
      title: 'Marketing',
      items: [
        { name: 'Marketing', path: '/admin/marketing', icon: Megaphone, hasSub: true },
        { name: 'Reports', path: '/admin/reports', icon: BarChart3, hasSub: true },
        { name: 'Settings', path: '/admin/settings', icon: Settings },
        { name: 'Users & Roles', path: '/admin/users', icon: UserCheck },
        { name: 'Support', path: '/admin/support', icon: LifeBuoy },
      ]
    }
  ];

  const handleLogout = () => {
    document.cookie = 'admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = '/admin/login';
  };

  return (
    <aside className={styles.sidebar}>
      {/* Top Decoration */}
      <div className={styles.topFeather}>
        <Image src="/peacock-feather.png" alt="" width={100} height={100} />
      </div>

      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Image src="/peacock-feather.png" alt="Logo" width={30} height={30} />
        </div>
        <div>
          <h1 className={styles.logoText}>SHYAM</h1>
          <p className={styles.logoSubtext}>DIVINE COLLECTIONS</p>
        </div>
      </div>

      <div className={styles.navContainer}>
        {menuGroups.map((group, idx) => (
          <div key={idx} className={styles.navGroup}>
            {/* <h3 className={styles.groupTitle}>{group.title}</h3> */}
            {group.items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                >
                  <div className={styles.navItemContent}>
                    <Icon size={18} className={styles.icon} />
                    <span>{item.name}</span>
                  </div>
                  {item.count && <span className={styles.badge}>{item.count}</span>}
                  {item.hasSub && <span className={styles.chevron}>›</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.quoteBox}>
          <p className={styles.quoteHi}>"हरि अनंत हरि कथा अनंता"</p>
          <p className={styles.quoteEn}>Krishna is infinite, so are His leelas.</p>
          <div className={styles.quoteDecoration}></div>
        </div>
        
        <div className={styles.footerActions}>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className={styles.bottomFeather}>
        <Image src="/peacock-feather.png" alt="" width={150} height={150} />
      </div>
    </aside>
  );
}
