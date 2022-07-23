const tabs = [
  { name: 'Immunisation Alerts', href: '#', current: true },
  { name: 'Lab Alerts', href: '#', current: false },
  { name: 'DI Alerts', href: '#', current: false },
  { name: 'Procedure Alerts', href: '#', current: false },
  { name: 'RX Specific Alerts', href: '#', current: false },
  { name: 'DX Specific Alerts', href: '#', current: false },
  { name: 'Patient Specific Alerts', href: '#', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Tabs = () => {
  return(
    <div>
      <div className="sm:hidden px-2.5 pt-2.5">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="tabs">
          <nav className="tabs__nav" aria-label="Tabs">
            <div className="tabs__item-wrapper">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'tabs__tab-active'
                      : 'tabs__tab-hover',
                        'tabs__tab'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Tabs;