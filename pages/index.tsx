import Grid from '@mui/material/Grid';
import ApexChartWrapper from 'src/ui/components/ApexChartWrapper';
import Trophy from './dashboard/Trophy';
import StatisticsCard from './dashboard/StatisticsCard';
import WeeklyOverview from './dashboard/WeeklyOverview';
import TotalEarning from './dashboard/TotalEarning';
import CardStatisticsVerticalComponent from './dashboard/CardStatisticsVerticalComponent';
import CurrencyDollor from '@mui/icons-material/AttachMoney';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import SalesByCountries from './dashboard/SalesByCountries';
import DepositWithdraw from './dashboard/DepositWithdraw';
import Table from './dashboard/Table';
const HomeDashBoard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="$25.6k"
                icon={<PollOutlinedIcon />}
                color="success"
                trendNumber="+42%"
                title="Total Profit"
                subtitle="Weekly Profit"
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="$78"
                title="Refunds"
                trend="negative"
                color="secondary"
                trendNumber="-15%"
                subtitle="Past Month"
                icon={<CurrencyDollor />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="862"
                trend="negative"
                trendNumber="-18%"
                title="New Project"
                subtitle="Yearly Project"
                icon={<BusinessCenterOutlinedIcon />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats="15"
                color="warning"
                trend="negative"
                trendNumber="-18%"
                subtitle="Last Week"
                title="Sales Queries"
                icon={<NotListedLocationOutlinedIcon />}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};
export default HomeDashBoard;
