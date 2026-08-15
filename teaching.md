---
layout: page
title: Teaching
subtitle: "Courses and mentoring"
---
{% assign courses = site.teaching | sort: 'date' | reverse %}
<ul class="teaching-list">
  {% for t in courses %}
    <li class="teaching-item">
      <span class="teaching-term">{{ t.semester }} {{ t.year }}</span>
      <span class="teaching-desc">
        <a class="teaching-title" href="{{ t.url | relative_url }}">{{ t.title }}</a>
        {% if t.role %}<span class="teaching-role">{{ t.role }}</span>{% endif %}
      </span>
    </li>
  {% else %}
    <li class="empty">No teaching entries yet. Add Markdown files to <code>_teaching/</code>.</li>
  {% endfor %}
</ul>
