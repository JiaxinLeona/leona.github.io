// 技能条动画
document.addEventListener('DOMContentLoaded', () => {
    // 加载技能条
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.querySelector('::before').style.width = level;
    });

    // 滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // 如果是技能条，触发加载动画
                if (entry.target.classList.contains('skill')) {
                    entry.target.style.setProperty('--width', entry.target.dataset.level);
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .skill').forEach(el => {
        observer.observe(el);
    });

    // 联系信息悬浮效果
    const contacts = document.querySelectorAll('.contact-card p');
    contacts.forEach(contact => {
        contact.addEventListener('mouseenter', () => {
            contact.style.transform = 'translateY(-3px)';
            contact.style.color = 'var(--primary)';
        });
        contact.addEventListener('mouseleave', () => {
            contact.style.transform = 'translateY(0)';
            contact.style.color = '';
        });
    });
});

// 证书点击效果
document.querySelectorAll('.certificate-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
        // 这里可以添加更多交互逻辑
    });
});
