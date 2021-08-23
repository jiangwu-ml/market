<template>
  <div class="category">
    <ul>
      <li>1kk</li>
      <li>2kk</li>
      <li>3kk</li>
      <li>4kk</li>
      <li>5kk</li>
      <li>6kk</li>
      <li>7kk</li>
      <li>8kk</li>
      <li>9kk</li>
      <li>10kk</li>
      <li>11kk</li>
      <li>12kk</li>
      <li>13kk</li>
      <li>14kk</li>
      <li>15kk</li>
      <li>16kk</li>
      <li>17kk</li>
      <li>18kk</li>
      <li>19kk</li>
      <li>20kk</li>
      <li>21kk</li>
      <li>22kk</li>
      <li>23kk</li>
      <li>24kk</li>
      <li>25kk</li>
      <li>26kk</li>
      <li>27kk</li>
      <li>28kk</li>
      <li>29kk</li>
      <li>30kk</li>
      <li>31kk</li>
      <li>32kk</li>
      <li>33kk</li>
      <li>34kk</li>
      <li>35kk</li>
      <li>36kk</li>
      <li>37kk</li>
      <li>38kk</li>
      <li>39kk</li>
      <li>40kk</li>
      <li>41kk</li>
      <li>42kk</li>
      <li>43kk</li>
      <li>44kk</li>
      <li>45kk</li>
      <li>46kk</li>
      <li>47kk</li>
      <li>48kk</li>
      <li>49kk</li>
      <li>50kk</li>
      <li>51kk</li>
      <li>52kk</li>
      <li>53kk</li>
      <li>54kk</li>
      <li>55kk</li>
      <li>56kk</li>
      <li>57kk</li>
      <li>58kk</li>
      <li>59kk</li>
      <li>60kk</li>
      <li>61kk</li>
      <li>62kk</li>
      <li>63kk</li>
      <li>64kk</li>
      <li>65kk</li>
      <li>66kk</li>
      <li>67kk</li>
      <li>68kk</li>
      <li>69kk</li>
      <li>70kk</li>
      <li>71kk</li>
      <li>72kk</li>
      <li>73kk</li>
      <li>74kk</li>
      <li>75kk</li>
      <li>76kk</li>
      <li>77kk</li>
      <li>78kk</li>
      <li>79kk</li>
      <li>80kk</li>
      <li>81kk</li>
      <li>82kk</li>
      <li>83kk</li>
      <li>84kk</li>
      <li>85kk</li>
      <li>86kk</li>
      <li>87kk</li>
      <li>88kk</li>
      <li>89kk</li>
      <li>90kk</li>
      <li>91kk</li>
      <li>92kk</li>
      <li>93kk</li>
      <li>94kk</li>
      <li>95kk</li>
      <li>96kk</li>
      <li>97kk</li>
      <li>98kk</li>
      <li>99kk</li>
      <li>100kk</li>
    </ul>
  </div>

</template>
<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll('.category', {})
    // setTimeout(() => {
    //   this.scroll = new BScroll('.wrapper', {})
    // }, 20)
  },
}
</script>
<style  scoped>
.category {
  background-color: pink;
  overflow: hidden;

  height: 200px;
}
</style>
