<script setup>
import TeamCard from '../.vitepress/components/TeamCard.vue'
</script>
# Our Background

We are a team of five students attending The University of Massachusetts Lowell. As a part of our software engineering class, we have been tasked to create an edutainment game, a video game with an educational component. We hope the game will cover math topics geared towards a middle school audience, but students of any age can find enjoyment. 

# The Team

<div class="pb-5"/>
<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;">

<TeamCard
  name="GJ Burlingame"
  title="Team Lead"
  avatarUrl="https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/GJ.png"
>
  <template #social-links>
    <a href="https://www.linkedin.com/in/gj-burlingame/" target="_blank">LinkedIn</a>
  </template>
</TeamCard>

<TeamCard
  name="Tommy Tran"
  title="Lead Developer"
  avatarUrl="https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/TN.jpg"
>
  <template #social-links>
    <a href="https://www.linkedin.com/in/tommy-tran-475492213" target="_blank">LinkedIn</a>
  </template>
</TeamCard>

<TeamCard
  name="Natalie Resendes"
  title="Engineer & Designer"
  avatarUrl="https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/NR.jpg"
  class="nataliecard"
>
  <template #social-links>
    <a href="https://github.com/nat992/" target="_blank">GitHub</a>
  </template>
</TeamCard>

<TeamCard
  name="Abdullah Shaheed"
  title="Lead Web Developer"
  avatarUrl="https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/AS.jpg"
  class="abdulcard"
>
  <template #social-links>
    <a href="https://www.linkedin.com/in/ashaheed/" target="_blank">LinkedIn</a>
  </template>
</TeamCard>

<TeamCard
  name="Sukhdeep Singh"
  title="Engineer and Web Developer"
  avatarUrl="https://raw.githubusercontent.com/MangoRox/swe1-g10-website/refs/heads/main/docs/img/SS.jpg"
>
  <template #social-links>
    <a href="https://github.com/SukhdeepSinghToor7/" target="_blank">GitHub</a>
  </template>
</TeamCard>

</div>
<!-- <VPTeamMembers size="small" :members /> -->