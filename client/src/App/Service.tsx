import { useTranslation } from 'react-i18next';

const Service = () => {
    const { t } = useTranslation();
    const regularObj = t('service.regular_list', { returnObjects: true }) as Record<string, string>;
    const generalObj = t('service.general_list', { returnObjects: true }) as Record<string, string>;
    const afterrepairObj = t('service.afterrepair_list', { returnObjects: true }) as Record<string, string>;
    const aftereventObj = t('service.afterevent_list', { returnObjects: true }) as Record<string, string>;
    const specialObj = t('service.special_list', { returnObjects: true }) as Record<string, string>;
    const disinfectionObj = t('service.disinfection_list', { returnObjects: true }) as Record<string, string>;
    const ecoObj = t('service.eco_list', { returnObjects: true }) as Record<string, string>;
    const individualObj = t('service.individual_list', { returnObjects: true }) as Record<string, string>;

    const regular = Object.entries(regularObj || {});
    const general = Object.entries(generalObj || {});
    const afterrepair = Object.entries(afterrepairObj || {});
    const afterevent = Object.entries(aftereventObj || {});
    const special = Object.entries(specialObj || {});
    const disinfection = Object.entries(disinfectionObj || {});
    const eco = Object.entries(ecoObj || {});
    const individual = Object.entries(individualObj || {});

    return (
        <div className="service">
            <div className="container">
                <h5 className="service-title">{t('service.title')}</h5>
                <div className="service-list">
                    <ul className="service-list-item">
                        <h5 className="service-list-item-title">{t('service.regular_title')}</h5>
                        {regular?.map(([key, item]) => <li key={key}>{item}</li>)}
                    </ul>
                    <ul className="service-list-item">
                        <h5 className="service-list-item-title">{t('service.general_title')}</h5>
                        {general?.map(([key, item]) => <li key={key}>{item}</li>)}
                    </ul>
                    <ul className="service-list-item">
                        <h5 className="service-list-item-title">{t('service.afterrepair_title')}</h5>
                        {afterrepair?.map(([key, item]) => <li key={key}>{item}</li>)}
                    </ul>
                    <ul className="service-list-item">
                        <h5 className="service-list-item-title">{t('service.afterevent_title')}</h5>
                        {afterevent?.map(([key, item]) => <li key={key}>{item}</li>)}
                    </ul>
                    <ul className="service-list-item">
                        <h5 className="service-list-item-title">{t('service.special_title')}</h5>
                        <ul>
                            {special?.map(([key, item]) => <li key={key}>{item}</li>)}
                        </ul>
                    </ul>
                    <ul className="service-list-item">
                        <h5 className="service-list-item-title">{t('service.disinfection_title')}</h5>
                        {disinfection?.map(([key, item]) => <li key={key}>{item}</li>)}
                    </ul>
                    <ul className="service-list-item">
                        <h5 className="service-list-item-title">{t('service.eco_title')}</h5>
                        {eco?.map(([key, item]) => <li key={key}>{item}</li>)}
                    </ul>
                    <ul className="service-list-item">
                        <h5 className="service-list-item-title">{t('service.individual_title')}</h5>
                        {individual?.map(([key, item]) => <li key={key}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Service