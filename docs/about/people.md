<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/GJ.png',
    name: 'GJ Burlingame',
    title: 'Team Lead',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/gj-burlingame/' }
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/TN.jpg/',
    name: 'Tommy Tran',
    title: 'Developer',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/tommy-tran-475492213/' },
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/NR.jpg/',
    name: 'Natalie Resendes',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/nat992/' },
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/AS.jpg',
    name: 'Abdullah Shaheed',
    title: 'Developer',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ashaheed/' },
    ]
  },
  {
    avatar: 'https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/SS.jpg',
    name: 'Sukhdeep Singh',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/SukhdeepSinghToor7' },
    ]
  },
]
</script>

# The Team

<VPTeamMembers size="small" :members />

<!-- <head>
  <component is="style">
    .team-members {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      column-gap: 10px;
      row-gap: 20px;
    }
    .team-card {
      display: flex;
      flex-direction: column;
    }
  </component>
</head>
<body>
<div class="team-members">
  <div class="team-card">
    <div class="card-header">
      <div class="photo-container">
        <img
          src="https://lavalamp.com/wp-content/uploads/2016/07/placeholder-1-1.png"
          height="300"
          width="300"
          alt="[Team Member Name] Photo"
          class="team-photo"
        />
      </div>
      <h3 class="team-name">Jane Doe</h3>
    </div>
    <div class="card-body">
      <p class="team-role">Lead Web Developer</p>
    </div>
    <div class="card-footer">
      <a
        href="https://example.com/janedoe"
        target="_blank"
        class="personal-link"
        >View Personal Page</a
      >
    </div>
  </div>
  <div class="team-card">
    <div class="card-header">
      <div class="photo-container">
        <img
          src="https://lavalamp.com/wp-content/uploads/2016/07/placeholder-1-1.png"
          height="300"
          width="300"
          alt="[Team Member Name] Photo"
          class="team-photo"
        />
      </div>
      <h3 class="team-name">Jane Doe</h3>
    </div>
    <div class="card-body">
      <p class="team-role">Lead Web Developer</p>
    </div>
    <div class="card-footer">
      <a
        href="https://example.com/janedoe"
        target="_blank"
        class="personal-link"
        >View Personal Page</a
      >
    </div>
  </div>
  <div class="team-card">
    <div class="card-header">
      <div class="photo-container">
        <img
          src="https://lavalamp.com/wp-content/uploads/2016/07/placeholder-1-1.png"
          height="300"
          width="300"
          alt="[Team Member Name] Photo"
          class="team-photo"
        />
      </div>
      <h3 class="team-name">Jane Doe</h3>
    </div>
    <div class="card-body">
      <p class="team-role">Lead Web Developer</p>
    </div>
    <div class="card-footer">
      <a
        href="https://example.com/janedoe"
        target="_blank"
        class="personal-link"
        >View Personal Page</a
      >
    </div>
  </div>
  <div class="team-card">
    <div class="card-header">
      <div class="photo-container">
        <img
          src="https://lavalamp.com/wp-content/uploads/2016/07/placeholder-1-1.png"
          height="300"
          width="300"
          alt="[Team Member Name] Photo"
          class="team-photo"
        />
      </div>
      <h3 class="team-name">Jane Doe</h3>
    </div>
    <div class="card-body">
      <p class="team-role">Lead Web Developer</p>
    </div>
    <div class="card-footer">
      <a
        href="https://example.com/janedoe"
        target="_blank"
        class="personal-link"
        >View Personal Page</a
      >
    </div>
  </div>
</div>
</body> -->